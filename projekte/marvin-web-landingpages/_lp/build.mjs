#!/usr/bin/env node
// ALLE 7 Landingpages aus zwei Mastern bauen.
// Warme Seiten:  warm.master.html (Koerper) + warm.channels.mjs (Kanal-Texte)
// Kalte Ad-LPs:  kalt.master.html (Koerper) + kalt.angles.mjs (Angle-Texte)
// Dann:  node _lp/build.mjs
// So kostet eine Design-Aenderung 1 Edit statt 7 Hand-Kopien, und og:title kann nicht mehr driften.
import { readFileSync, writeFileSync } from 'node:fs';
import warm from './warm.channels.mjs';
import kalt from './kalt.angles.mjs';

const here = new URL('.', import.meta.url);

function build(masterDatei, seiten) {
  const master = readFileSync(new URL(masterDatei, here), 'utf8');
  for (const [name, d] of Object.entries(seiten)) {
    // og:title folgt IMMER dem Titel (verhindert die alte Drift)
    const felder = { ...d, ogTitle: d.title, ogPath: '/' + name };
    let out = master;
    for (const [k, v] of Object.entries(felder)) out = out.replaceAll(`{{${k}}}`, v);
    const rest = out.match(/{{[^}]+}}/g);
    if (rest) throw new Error(`${name}: ungefuellte Platzhalter ${rest.join(', ')}`);
    writeFileSync(new URL(`../${name}.html`, here), out);
    console.log('gebaut:', name + '.html');
  }
}

build('warm.master.html', warm);
build('kalt.master.html', kalt);
