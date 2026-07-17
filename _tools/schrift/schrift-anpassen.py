#!/usr/bin/env python3
"""
schrift-anpassen.py — macht aus einer freien Variable Font eine angepasste Kundenschrift.

Was es tut (in dieser Reihenfolge):
  1. Schnitt ziehen: pinnt die Achsen auf feste Werte -> statische Schrift, die es
     als fertiges Produkt nirgends gibt (die Buchstabenformen bleiben die des Typografen).
  2. Umbenennen: komplette name-Tabelle auf den Kundennamen.
  3. Zuschneiden: nur die gebrauchten Zeichen -> kleinere Datei, schnellere Seite.
  4. woff2 schreiben + OFL.txt danebenlegen (Copyright + Lizenz muessen mitreisen).
  5. Fertigen @font-face-Schnipsel ausgeben.

LIZENZ-LAGE (geprueft 2026-07-17, Quelle: name-Tabelle der Schriften):
  Recursive, Fraunces und Roboto Flex stehen unter SIL OFL 1.1 und deklarieren KEINEN
  Reserved Font Name. Umbenennen ist deshalb nicht Pflicht, wir tun es trotzdem
  (Produktversprechen "auf Ihren Namen" + saubere Praxis, keine Cache-Kollisionen).
  PFLICHT bleibt: Copyright-Hinweis + vollstaendiger Lizenztext reisen mit der Datei mit.
  Die angepasste Schrift bleibt selbst OFL. Also NIE "gehoert exklusiv Ihnen" verkaufen,
  sondern "fuer Sie angepasst und auf Ihren Namen".

Beispiele:
  python3 schrift-anpassen.py --basis Fraunces --achsen wght=600,opsz=48,SOFT=30,WONK=1 \
      --name "Mueller Sans" --stil Bold --ziel ../../projekte/kunde/fonts
  python3 schrift-anpassen.py --basis RobotoFlex --achsen wght=400,wdth=110 \
      --name "Praxis Grotesk" --zeichen ../../projekte/kunde/index.html
"""

import argparse, os, re, sys, unicodedata
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools import subset

HIER = os.path.dirname(os.path.abspath(__file__))
BASIS = os.path.join(HIER, "basis")
OFL_TEXT = os.path.join(HIER, "OFL-1.1.txt")

# Deutscher Grundzeichensatz: ASCII + Umlaute + Waehrung + Typografie + Akzente
# (bewusst NICHT nur die Zeichen der aktuellen Seite: ein spaeterer Textwunsch des
#  Kunden darf keine Tofu-Kaestchen erzeugen)
ZEICHEN_DEUTSCH = (
    "".join(chr(c) for c in range(0x20, 0x7F))          # ASCII druckbar
    + "ÄÖÜäöüß"                                          # Deutsch
    + "€£¢"                                              # Waehrung
    + "„“”‚‘’«»"                                         # Anfuehrungszeichen
    + "–—…•·"                                            # Striche/Punkte
    + "°§±×÷≈≠≤≥"                                        # Zeichen
    + "©®™"                                              # Marken
    + "←→↑↓"                                             # Pfeile
    + "✓✗"                                               # Haken
    + "ÀÁÂÃÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕØÙÚÛÝŸŽ"                      # Akzente Gross
    + "àáâãåæçèéêëìíîïñòóôõøùúûýÿž"                      # Akzente klein
    + "ŁłŃńŚśŹźŻżĆćČčŠšŘřĚěŮůŐőŰű"                       # Osteuropa (Namen!)
)


def slug(s):
    s = unicodedata.normalize("NFKD", s)
    s = s.replace("ä", "ae").replace("ö", "oe").replace("ü", "ue").replace("ß", "ss")
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def ps_name(s):
    return re.sub(r"[^A-Za-z0-9]", "", unicodedata.normalize("NFKD", s))


def achsen_lesen(text):
    werte = {}
    for teil in text.split(","):
        if not teil.strip():
            continue
        if "=" not in teil:
            sys.exit(f"FEHLER: Achse '{teil}' braucht die Form tag=wert (z.B. wght=600)")
        tag, wert = teil.split("=", 1)
        werte[tag.strip()] = float(wert)
    return werte


def umbenennen(font, familie, stil, quelle_copyright):
    """Setzt die name-Tabelle komplett neu. Copyright + Lizenz bleiben erhalten (OFL-Pflicht)."""
    voll = familie if stil.lower() == "regular" else f"{familie} {stil}"
    ps = f"{ps_name(familie)}-{ps_name(stil)}"
    version = "1.000"

    name = font["name"]
    # Alte Namen weg, die auf die Ursprungsschrift zeigen (16/17 typografisch,
    # 21/22 WWS, 25 Variations-Prefix). Sonst zeigt der Font-Dialog zwei Familien.
    for nid in (16, 17, 21, 22, 25):
        name.removeNames(nameID=nid)

    neu = {
        1: familie,
        2: stil,
        3: f"{version};{ps}",      # Unique ID
        4: voll,
        5: f"Version {version}",
        6: ps,
    }
    # Copyright (0) ehrlich ergaenzen: Urheber bleibt drin, Aenderung wird benannt
    neu[0] = f"{quelle_copyright} | Angepasste Fassung, umbenannt in '{familie}'."

    for nid, wert in neu.items():
        name.setName(wert, nid, 3, 1, 0x409)   # Windows Unicode
        name.setName(wert, nid, 1, 0, 0)       # Mac Roman (Altlast, schadet nicht)
    return voll, ps


def main():
    p = argparse.ArgumentParser(description="Freie Variable Font zur Kundenschrift anpassen.")
    p.add_argument("--basis", required=True, help="Fraunces | Recursive | RobotoFlex")
    p.add_argument("--achsen", required=True, help="z.B. wght=600,opsz=48,SOFT=30")
    p.add_argument("--name", required=True, help='Familienname, z.B. "Mueller Sans"')
    p.add_argument("--stil", default="Regular", help="Regular (Standard) | Bold | ...")
    p.add_argument("--zeichen", default="deutsch",
                   help="deutsch (Standard) | Pfad zu HTML/Text (nur dessen Zeichen)")
    p.add_argument("--ziel", required=True, help="Zielordner (fonts/ des Projekts)")
    p.add_argument("--ttf", action="store_true", help="zusaetzlich .ttf ausgeben")
    a = p.parse_args()

    quelle = os.path.join(BASIS, f"{a.basis}-VF.ttf")
    if not os.path.exists(quelle):
        vorhanden = [f.replace("-VF.ttf", "") for f in os.listdir(BASIS) if f.endswith("-VF.ttf")]
        sys.exit(f"FEHLER: '{a.basis}' nicht gefunden. Vorhanden: {', '.join(vorhanden)}")

    font = TTFont(quelle)
    quelle_copyright = next((r.toUnicode() for r in font["name"].names if r.nameID == 0), "")

    # --- 1. Schnitt ziehen -------------------------------------------------
    achsen_vorhanden = {ax.axisTag: (ax.minValue, ax.defaultValue, ax.maxValue)
                        for ax in font["fvar"].axes}
    wunsch = achsen_lesen(a.achsen)
    for tag, wert in wunsch.items():
        if tag not in achsen_vorhanden:
            sys.exit(f"FEHLER: '{a.basis}' hat keine Achse '{tag}'. "
                     f"Vorhanden: {', '.join(achsen_vorhanden)}")
        lo, _, hi = achsen_vorhanden[tag]
        if not (lo <= wert <= hi):
            sys.exit(f"FEHLER: {tag}={wert} liegt ausserhalb von {lo} bis {hi}")
    # Nicht genannte Achsen auf ihren Standard pinnen -> vollstaendig statisch
    voll_pin = {tag: wunsch.get(tag, std) for tag, (_, std, _) in achsen_vorhanden.items()}
    font = instancer.instantiateVariableFont(font, voll_pin, inplace=False)

    # --- 2. Umbenennen -----------------------------------------------------
    voll, ps = umbenennen(font, a.name, a.stil, quelle_copyright)

    # --- 3. Zuschneiden ----------------------------------------------------
    if a.zeichen == "deutsch":
        zeichen = ZEICHEN_DEUTSCH
        zeichen_quelle = "deutscher Grundzeichensatz"
    else:
        if not os.path.exists(a.zeichen):
            sys.exit(f"FEHLER: Datei '{a.zeichen}' nicht gefunden")
        roh = open(a.zeichen, encoding="utf-8").read()
        roh = re.sub(r"<[^>]+>", " ", roh)      # HTML-Tags raus
        zeichen = "".join(sorted(set(roh + ZEICHEN_DEUTSCH[:95])))
        zeichen_quelle = f"Zeichen aus {os.path.basename(a.zeichen)} + ASCII"

    opt = subset.Options()
    opt.layout_features = ["*"]     # Kerning/Ligaturen behalten
    opt.name_IDs = ["*"]            # WICHTIG: sonst faellt die Lizenz (13/14) raus!
    opt.name_legacy = True
    opt.notdef_outline = True
    opt.drop_tables = []
    s = subset.Subsetter(options=opt)
    s.populate(text=zeichen)
    s.subset(font)

    # --- 4. Schreiben ------------------------------------------------------
    os.makedirs(a.ziel, exist_ok=True)
    gewicht = int(wunsch.get("wght", 400))
    datei = f"{slug(a.name)}-{gewicht}"
    font.flavor = "woff2"
    pfad_woff2 = os.path.join(a.ziel, datei + ".woff2")
    font.save(pfad_woff2)
    if a.ttf:
        font.flavor = None
        font.save(os.path.join(a.ziel, datei + ".ttf"))

    # OFL danebenlegen (Pflicht: Copyright + Lizenz reisen mit)
    lizenz_ziel = os.path.join(a.ziel, "OFL.txt")
    kopf = (f"Diese Schrift ist eine angepasste Fassung.\n"
            f"Ursprung: {a.basis}\n{quelle_copyright}\n"
            f"Angepasst und umbenannt in: {a.name}\n"
            f"Die Schrift steht weiterhin unter der SIL Open Font License 1.1.\n"
            + "=" * 72 + "\n\n")
    open(lizenz_ziel, "w", encoding="utf-8").write(kopf + open(OFL_TEXT, encoding="utf-8").read())

    # --- 5. Bericht --------------------------------------------------------
    kb = os.path.getsize(pfad_woff2) / 1024
    print(f"\nFertig: {pfad_woff2}  ({kb:.1f} KB)")
    print(f"  Basis:    {a.basis} -> Schnitt {', '.join(f'{k}={v:g}' for k, v in wunsch.items())}")
    print(f"  Name:     {voll}  (PostScript: {ps})")
    print(f"  Zeichen:  {len(set(zeichen))} ({zeichen_quelle})")
    print(f"  Lizenz:   {lizenz_ziel}")
    print(f"\n@font-face-Schnipsel fuer styles.css:\n")
    print(f"@font-face{{font-family:'{a.name}';src:url('fonts/{datei}.woff2') format('woff2');"
          f"font-weight:{gewicht};font-display:swap;font-style:normal}}\n")


if __name__ == "__main__":
    main()
