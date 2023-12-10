import type { HSL, OKLCH } from '$lib/types/colors';
import { converter } from 'culori';

const oklchConverter = converter('oklch');
const hslConverter = converter('hsl');

const DEFAULT_HSL : HSL = {
  h: 0,
  s: 0,
  l: 0
};
const DEFAULT_OKLCH : OKLCH = {
  h: 0,
  c: 0,
  l: 0
};

/**
 * We store colors as "HSL strings" in CSS vars.
 * This is for working with Tailwind:
 * https://tailwindcss.com/docs/customizing-colors#using-css-variables
 */
function HSLStrToObj(hslStr: string): HSL {
  if (!hslStr) return DEFAULT_HSL;

  const tokens = hslStr.split(' ');
  if (tokens.length < 3) return DEFAULT_HSL;

  const hStr = tokens[0];
  const h = Number(hStr.substring(0, hStr.length - 3));
  const sStr = tokens[1];
  const s = Number(sStr.substring(0, sStr.length - 1));
  const lStr = tokens[2];
  const l = Number(lStr.substring(0, lStr.length - 1));

  return {
    h: h,
    s: s,
    l: l,
  }
}
function HSLObjToStr(hslObj: HSL): string {
  const { h, s, l } = hslObj;
  return `${h}deg ${s}% ${l}%`
}

function HSLToOKLCH(hsl: HSL) : OKLCH {
  if (!hsl) return DEFAULT_OKLCH;

  const res = oklchConverter({
    mode: 'hsl',
    h: hsl.h,
    s: hsl.s/100,
    l: hsl.l/100,
  });

  return res as OKLCH;
}
function OKLCHToHSL(oklch: OKLCH) : HSL {
  if (!oklch) return DEFAULT_HSL

  const res = hslConverter({
    mode: "oklch",
    ...oklch,
  });
  if (res.h === undefined) res.h = 0;

  return {
    h: res.h,
    s: res.s*100,
    l: res.l*100,
  }
}

function getHSLFromCSSVar(varname: string): HSL {
  if (!varname) return DEFAULT_HSL;
  if (typeof document === "undefined") return DEFAULT_HSL;

  const val = getComputedStyle(document.documentElement).getPropertyValue(varname);
  const hsl = HSLStrToObj(val);

  return hsl;
}
function setHslToCSSVar(hsl: HSL, varname: string) {
  if (!varname) return;
  if (typeof document === "undefined") return;

  const hslStr = HSLObjToStr(hsl);
  document.documentElement.style.setProperty(varname, hslStr);
}

export {
  HSLStrToObj,
  HSLObjToStr,
  HSLToOKLCH,
  OKLCHToHSL,
  getHSLFromCSSVar,
  setHslToCSSVar,
}