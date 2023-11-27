import type { HSL } from '$lib/types/colors';

/*********************************************
 * We store colors as "HSL strings" in CSS vars.
 * This is for working with Tailwind:
 * https://tailwindcss.com/docs/customizing-colors#using-css-variables
 *
 * Functions here convert to/from that format for use with the
 * - Color Picker
 * - Color Generator
 * - Tailwind
 ********************************************/

const DEFAULT_HSL : HSL = {
  h: 0,
  s: 0,
  l: 0
};

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

/**
 * From:
 * https://www.jameslmilner.com/posts/converting-rgb-hex-hsl-colors/
 */
function HSLToHex(hsl: HSL) {
  const { h, s, l } = hsl;

  const hDecimal = l / 100;
  const a = (s * Math.min(hDecimal, 1 - hDecimal)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = hDecimal - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    // Convert to Hex and prefix with "0" if required
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/**
 * From:
 * https://www.jameslmilner.com/posts/converting-rgb-hex-hsl-colors/
 */
function hexToHSL(hex: string) : HSL {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    console.error("Could not parse Hex Color, using Default HSL");
    return DEFAULT_HSL;
  }

  const rHex = parseInt(result[1], 16);
  const gHex = parseInt(result[2], 16);
  const bHex = parseInt(result[3], 16);

  const r = rHex / 255;
  const g = gHex / 255;
  const b = bHex / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = (max + min) / 2;
  let s = h;
  let l = h;

  if (max === min) {
    // Achromatic
    return { h: 0, s: 0, l };
  }

  const d = max - min;
  s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  switch (max) {
    case r:
      h = (g - b) / d + (g < b ? 6 : 0);
      break;
    case g:
      h = (b - r) / d + 2;
      break;
    case b:
      h = (r - g) / d + 4;
      break;
  }
  h /= 6;

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  return { h, s, l };
}

function hexFromCSSVar(varname: string): string {
  if (!varname) return "#000000";
  if (typeof document === "undefined") return "#000000";

  const val = getComputedStyle(document.documentElement).getPropertyValue(varname);
  const hsl = HSLStrToObj(val);

  return HSLToHex(hsl);
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
  HSLToHex,
  hexToHSL,
  hexFromCSSVar,
  setHslToCSSVar,
}