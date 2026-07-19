// Kontaktformular-Endpoint (Cloudflare Pages Function), erreichbar unter /api/kontakt.
// Ersetzt Formspree: kein US-Drittempfaenger, eigener Redirect, serverseitiger Botschutz.
// Ablauf: POST entgegennehmen -> Honeypot + Zeit-Falle serverseitig -> validieren ->
// zwei Mails ueber Zoho ZeptoMail (EU) verschicken (Benachrichtigung an uns +
// Eingangsbestaetigung an den Absender) -> 303-Redirect auf /danke.
// Der ZeptoMail-Sendetoken liegt als verschluesselte Env-Var ZEPTOMAIL_TOKEN im Pages-Projekt,
// NIE im Code.

const ZEPTO_URL   = "https://api.zeptomail.eu/v1.1/email"; // EU-Rechenzentrum (zoho.eu-Konto)
const EMPFAENGER  = { address: "info@marvinwebdesign.de", name: "MARVIN.WEB" };            // an dich
const ABSENDER    = { address: "formular@marvinwebdesign.de", name: "MARVIN.WEB Formular" }; // From (verifizierte Domain)
const ANTWORT_VON = { address: "info@marvinwebdesign.de", name: "Marvin Müller" };         // Reply-To der Bestaetigung
const MINDEST_MS  = 2500; // schneller abgeschickt als das = mutmasslich Bot

export async function onRequestPost(context) {
  const { request, env } = context;
  const origin = new URL(request.url).origin;
  const nach = (pfad) => Response.redirect(origin + pfad, 303);

  let form;
  try { form = await request.formData(); }
  catch { return fehlerSeite(origin); }

  const feld = (k) => (form.get(k) || "").toString().trim();
  const name      = feld("name");
  const email     = feld("email");
  const website   = feld("website");
  const nachricht = feld("nachricht");
  const honeypot  = feld("_gotcha");
  const ts        = parseInt(feld("_ts"), 10);

  // Schicht 1: Honeypot gefuellt -> Bot. Still "Erfolg" vortaeuschen, nichts senden.
  if (honeypot) return nach("/danke");
  // Schicht 2: zu schnell abgeschickt (nur pruefen, wenn JS den Zeitstempel gesetzt hat).
  if (ts && Date.now() - ts >= 0 && Date.now() - ts < MINDEST_MS) return nach("/danke");

  // Pflichtfelder
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk) {
    return fehlerSeite(origin, "Bitte gib deinen Namen und eine gültige E-Mail-Adresse an.");
  }

  // Kopfzeilen-sicher: keine Zeilenumbrueche in From/Subject/Reply-To, Laengen begrenzen.
  const einzeilig = (s, max) => s.replace(/[\r\n]+/g, " ").slice(0, max);
  const nameSafe  = einzeilig(name, 120);
  const emailSafe = einzeilig(email, 200);
  const siteSafe  = einzeilig(website, 300) || "(keine Angabe)";
  const textSafe  = nachricht.slice(0, 5000) || "(keine Nachricht)";

  // 1) Benachrichtigung an dich. Reply-To = Absender, damit du direkt antworten kannst.
  const internText =
`Neue Anfrage über das Kontaktformular auf marvinwebdesign.de

Name:     ${nameSafe}
E-Mail:   ${emailSafe}
Website:  ${siteSafe}

Nachricht:
${textSafe}
`;

  // 2) Freundliche Eingangsbestaetigung an den Absender (kein hohler Auto-Text).
  const dankeText =
`Hallo ${nameSafe},

danke für deine Nachricht, sie ist bei mir angekommen. Ich schaue sie mir persönlich an und melde mich innerhalb von einem Werktag bei dir, direkt von mir und nicht automatisiert.

Wenn es dringend ist, erreichst du mich am schnellsten telefonisch oder per WhatsApp unter +49 159 06453169.

Viele Grüße
Marvin

--
MARVIN.WEB, Webdesign aus Berlin
https://marvinwebdesign.de
`;

  // Token toleriert beide Schreibweisen: reiner Token oder komplette "Zoho-enczapikey ..."-Zeile.
  const token = (env.ZEPTOMAIL_TOKEN || "").trim();
  const auth = token.startsWith("Zoho-") ? token : "Zoho-enczapikey " + token;

  const sende = (empfaenger, betreff, textbody, replyTo) => fetch(ZEPTO_URL, {
    method: "POST",
    headers: {
      "Authorization": auth,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      from: ABSENDER,
      to: [{ email_address: empfaenger }],
      subject: betreff,
      textbody,
      ...(replyTo ? { reply_to: [replyTo] } : {}),
    }),
  });

  // Die Benachrichtigung an dich ist Pflicht: schlaegt sie fehl, geht der Lead sonst lautlos verloren.
  let res;
  try {
    res = await sende(EMPFAENGER, `Neue Anfrage: ${nameSafe}`, internText, { address: emailSafe, name: nameSafe });
  } catch {
    return fehlerSeite(origin);
  }
  if (!res.ok) return fehlerSeite(origin);

  // Eingangsbestaetigung an den Kunden ist "best effort": ein Fehler hier blockiert die Anfrage nicht.
  try {
    await sende({ address: emailSafe, name: nameSafe }, "Deine Nachricht ist angekommen", dankeText, ANTWORT_VON);
  } catch { /* bewusst ignoriert */ }

  return nach("/danke");
}

// GET (jemand ruft den Endpoint direkt auf) -> zurueck zur Kontaktseite.
export function onRequestGet(context) {
  return Response.redirect(new URL(context.request.url).origin + "/kontakt", 303);
}

// Kleine, in sich geschlossene Fehlerseite mit direktem Kontaktweg (kein verlorener Lead).
function fehlerSeite(origin, meldung) {
  const text = meldung || "Beim Absenden ist technisch etwas schiefgelaufen.";
  const html = `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex"><title>Da ist etwas schiefgelaufen · MARVIN.WEB</title><style>body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:#f5f1e8;color:#161412;line-height:1.6;margin:0}.w{max-width:560px;margin:0 auto;padding:80px 28px}h1{font-size:30px;letter-spacing:-.02em;margin:0 0 14px}a{color:#b53507;font-weight:600}.b{display:inline-block;margin-top:24px;background:#b53507;color:#fff;text-decoration:none;padding:12px 22px}</style></head><body><div class="w"><h1>Da ist etwas schiefgelaufen.</h1><p>${text} Bitte schreib mir direkt an <a href="mailto:info@marvinwebdesign.de">info@marvinwebdesign.de</a> oder ruf an unter <a href="tel:+4915906453169">+49&nbsp;159&nbsp;06453169</a>. Ich kümmere mich darum.</p><a class="b" href="${origin}/kontakt">Zurück zum Formular</a></div></body></html>`;
  return new Response(html, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } });
}
