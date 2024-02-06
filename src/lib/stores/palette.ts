/*********************************************
 * Store for the palettes and palette actions.
 * - Holds existing colors and handles setting colors
 *   on the palette externally.
 ********************************************/

import { writable, get } from 'svelte/store';
import type { HSL } from '$lib/types/colors'
import type { PaletteColor } from '$lib/types/palette';

function createPalette() {
  const store = writable<{ index: number, color:PaletteColor }[]>([]);
  const { subscribe, update } = store;

	return {
		subscribe,
    addColor: (color: PaletteColor, pos: number) => update((palette) => {
      palette.push({ index: pos, color: color});
      return palette.toSorted((a, b) => a.index - b.index);
    }),
    setPaletteColors: (colors: HSL[]) => {
      const palette = get(store);
      palette.map((item)  => {
        item.color.setPaletteColor(colors[item.index]);
      })
    },
    getPaletteColorHex: (index: number) => {
      const palette = get(store);
      for (const p of palette) {
        if (p.index === index) {
          return p.color.getPaletteColor();
        }
      }
      return null;
    },
    debug: () => {
      const palette = get(store);
      console.log(palette);
    }
	};
}

export const paletteStore = createPalette;
