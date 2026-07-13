#!/usr/bin/env node
// Rastert ein SVG zu PNG (Favicons, og:image, Pruef-Renders in Zielgroessen).
// Nutzung: node svg-zu-png.mjs <in.svg> <out.png> <breite-px> [hintergrund z.B. '#FAF9F5']
import { readFileSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';

const [rein, raus, breiteArg, hintergrund] = process.argv.slice(2);
if (!rein || !raus || !breiteArg) {
  console.error("Nutzung: node svg-zu-png.mjs <in.svg> <out.png> <breite> [hintergrund]");
  process.exit(1);
}
const resvg = new Resvg(readFileSync(rein, 'utf8'), {
  fitTo: { mode: 'width', value: Number(breiteArg) },
  background: hintergrund || 'rgba(0,0,0,0)',
});
writeFileSync(raus, resvg.render().asPng());
console.log(`${raus} (${breiteArg}px breit) geschrieben`);
