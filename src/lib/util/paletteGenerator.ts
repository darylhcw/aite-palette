import type { HSL } from '$lib/types/colors';

const PALETTE_INDEXES = Array(8).fill(0).map((_, i) => i);
type PalettePosition = typeof PALETTE_INDEXES[number];


  /*********************************************
   * - Pick the middle primary color first.
   * - Best way - Pick something that would work as a button background
   *            - Pick edges
   *            - For Greys pick darkest/lightest
   * - At low/high lightness, saturation is weakened
   * - "Perceived Brightness" of colors
   * - Rotate hue towards higher/lower "perceived brightness"
   *   - 60, 180, 300 - Bright
   *   - 0, 120, 240 - Dark
   * - Greys don't have to be GREY
   *   - Add a bit of yellow/orange for warmth
   *   - Add a bit of blue for cool
   ********************************************/


/**
 * Takes a color in any position on the palette, and generates
 * the full palette from it.
 * - Not a super advanced method, just randomly increase/decrease
 *   hue/sat/lightness as neccessary.
 * - Hue change is limited by perceived brightness/darkness of a color.
 *   Prevents rotating the color past lighter hues to darker hues and vice versa.
 * - For cases where black/white is passed in and is NOT at the appropriate
 *   edge of the palette, you just get multiple blacks/whites.
 *
 * Accepts: HSL color, and 'position' number in palette index.
 * Returns: A set of 8 HSL colors in an array, where the indexes
 *          correspond to positions in the palette.
 */
function generatePaletteFromColor(color: HSL, position: PalettePosition) {
  console.log('c', color);
  console.log('pos', position);

  const res = {
    h: 0,
    s: 0,
    l: 0
  };

  return Array(9).fill(res);
}

export {
  generatePaletteFromColor
}