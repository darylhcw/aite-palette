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

  const hsl = roundHSLColorVals({
    h: res.h,
    s: res.s*100,
    l: res.l*100
  })

  if (needsFallback(hsl)) {
    const fb = fallbackColor(hsl);
    console.warn(`Using fallback for:\n${JSON.stringify(oklch)}.\n${JSON.stringify(hsl)}`
                  + `\nFallback:\n${JSON.stringify(fb)}`);
    return fb;
  } else {
    console.log("=============");
    console.log(oklch);
    console.log(hsl);
    return hsl;
  }
}

function needsFallback(color: HSL) {
  return (color.h > 360 || color.h < 0)
          || (color.s > 100 || color.s < 0)
          || (color.l > 100 || color.s < 0);
}
function fallbackColor(color: HSL) : HSL {
  return {
    h: Math.abs(color.h) % 360,
    s: clamp(color.s, 0, 100),
    l: clamp(color.l, 0, 100)
  };
}
function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}


function getHSLFromCSSVar(varname: string): HSL {
  if (!varname) return DEFAULT_HSL;
  if (typeof document === "undefined") return DEFAULT_HSL;

  const val = getComputedStyle(document.documentElement).getPropertyValue(varname);
  const hsl = HSLStrToObj(val);

  return hsl;
}
function setHSLToCSSVar(hsl: HSL, varname: string) {
  if (!varname) return;
  if (typeof document === "undefined") return;

  const hslStr = HSLObjToStr(hsl);
  document.documentElement.style.setProperty(varname, hslStr);
}

function roundHSLColorVals(color: HSL) {
  return {
    h: Math.round(color.h),
    s: Math.round(color.s),
    l: Math.round(color.l)
  }
}

export {
  HSLStrToObj,
  HSLObjToStr,
  HSLToOKLCH,
  OKLCHToHSL,
  getHSLFromCSSVar,
  setHSLToCSSVar,
  roundHSLColorVals,
}
