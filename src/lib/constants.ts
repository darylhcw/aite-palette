// Palette
const MIN_LIGHTNESS = 20;
const MAX_LIGHTNESS = 94;

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
  { min: 90, max: MAX_LIGHTNESS },
  { min: 83, max: 90 },
  { min: 73, max: 83 },
  { min: 62, max: 73 },
  { min: 53, max: 62 },
  { min: 43, max: 53 },
  { min: 37, max: 43 },
  { min: 26, max: 37 },
  { min: MIN_LIGHTNESS, max: 26 },
]
const PALETTE_LENGTH = PALETTE_RANGES.length;

export {
  MIN_LIGHTNESS,
  MAX_LIGHTNESS,
  PALETTE_RANGES,
  PALETTE_LENGTH
}