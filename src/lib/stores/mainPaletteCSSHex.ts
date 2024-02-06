import { writable } from 'svelte/store';
import { getHexFromCSSVar } from '$lib/util/colorConvert';
import { PALETTE_LENGTH } from '$lib/constants';

const mainPaletteVars = [...Array(PALETTE_LENGTH)].map((_, i) => {
  const x = i + 1;
  return `--palette-${x}00`
})

const mainPaletteHexStore = writable(buildPaletteHex());

function buildPaletteHex() {
  const palette: { [key: string]: string; } = {};
  for (const v of mainPaletteVars) {
    palette[v] = getHexFromCSSVar(v);
  }
  return palette;
}
function mainPaletteVarsUpdated() {
  mainPaletteHexStore.set(buildPaletteHex());
}

export {
  mainPaletteHexStore,
  mainPaletteVarsUpdated,
}