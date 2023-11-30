import type { HSL } from '$lib/types/colors';

export type SetPaletteColorFunc = (color: HSL) => void;

export interface PaletteColor {
  setPaletteColor: SetPaletteColorFunc;
}
