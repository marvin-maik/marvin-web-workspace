#!/usr/bin/env node
// Warme Landingpages aus EINER Quelle bauen.
// Aendere den gemeinsamen Koerper in warm.master.html, oder die Kanal-Texte in
// warm.channels.mjs, dann:  node _lp/build.mjs
// Erzeugt angebot.html + karte.html + whatsapp.html + instagram.html neu.
// So kostet eine Design-Aenderung 1 Edit statt 4 Hand-Kopien, und og:title kann nicht mehr driften.
import { readFileSync, writeFileSync } from 'node:fs';
import channels from './warm.channels.mjs';

const here = new URL('.', import.meta.url);
const master = readFileSync(new URL('warm.master.html', here), 'utf8');

for (const [name, d] of Object.entries(channels)) {
  let out = master
    .replace('{{kanalKommentar}}', d.kanalKommentar)
    .replace('{{title}}', d.title)
    .replace('{{ogTitle}}', d.title)   // og:title folgt IMMER dem Titel (verhindert die alte Drift)
    .replace('{{ogPath}}', '/' + name)
    .replace('{{h1}}', d.h1)
    .replace('{{heroSub}}', d.heroSub)
    .replace('{{ctaH2}}', d.ctaH2)
    .replace('{{waPrefill}}', d.waPrefill);
  const rest = out.match(/{{[^}]+}}/g);
  if (rest) throw new Error(`${name}: ungefuellte Platzhalter ${rest.join(', ')}`);
  writeFileSync(new URL(`../${name}.html`, here), out);
  console.log('gebaut:', name + '.html');
}
