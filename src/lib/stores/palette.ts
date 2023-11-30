/*********************************************
 * Store for the palettes and palette actions.
 * - Holds existing colors and handles setting colors
 *   on the palette externally.
 ********************************************/

import { writable, get } from 'svelte/store';
import type { HSL } from '$lib/types/colors'
import type { PaletteColor } from '$lib/types/palette';

function createPalette() {
  const store = writable<PaletteColor[]>([]);
  const { subscribe, update } = store;

	return {
		subscribe,
    addColor: (color: PaletteColor) => update((palette) => {
      return [...palette, color];
    }),
    setPaletteColors: (colors: HSL[]) => {
      const palette = get(store);
      colors.forEach((color, i) => {
        if (i > palette.length - 1) return;

        palette[i].setPaletteColor(color);
      });
    },
    debug: () => {
      const palette = get(store);
      console.log(palette);
    }
	};
}

export const paletteStore = createPalette;
