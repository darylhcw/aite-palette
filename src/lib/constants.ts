// Palette
const MIN_LIGHTNESS = 19;
const MAX_LIGHTNESS = 97;
const MAIN_PALETTE_KEY = "main";
const GREY_PALETTE_KEY = "greys";

/**
 * Note:
 * - This MUST be sorted to according palette index.
 * - Place ranges with lighters colors (HIGHER first.
 *   'min' is inclusive, 'max' is exclusive.
 * - Note ranges are not even:
 *   = Less difference in the center vs min/max
 *   = Less usage of darker end of lightness
 *     (They seem harder to use well!)
 */
const PALETTE_RANGES = [
  { min: 91, max: MAX_LIGHTNESS },
  { min: 86, max: 91 },
  { min: 76, max: 86 },
  { min: 64, max: 76 },
  { min: 54, max: 64 },
  { min: 43, max: 54 },
  { min: 37, max: 43 },
  { min: 26, max: 37 },
  { min: MIN_LIGHTNESS, max: 26 },
]
const PALETTE_LENGTH = PALETTE_RANGES.length;

const BRAND_TAILWIND_CSS = ["bg-palette-800", "bg-palette-600", "bg-palette-400", "bg-palette-200"]

export {
  MIN_LIGHTNESS,
  MAX_LIGHTNESS,
  MAIN_PALETTE_KEY,
  GREY_PALETTE_KEY,
  PALETTE_RANGES,
  PALETTE_LENGTH,
  BRAND_TAILWIND_CSS
}
