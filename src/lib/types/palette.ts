import type { HSL } from '$lib/types/colors';

// For the component/HTML element
export type PaletteComponent = {
  getColor: () => HSL;
  setColor: (color: HSL) => void;
}
export type PaletteChangeEvent = {
  type: string;
  h: number;
  s: number;
  l: number;
}

// For a color in the palette store.
export type SetPaletteColorFunc = (color: HSL) => void;

export interface PaletteColor {
  setPaletteColor: SetPaletteColorFunc;
}
