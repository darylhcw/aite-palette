import type { HSL } from '$lib/types/colors';
import { HSLToOKLCH, OKLCHToHSL, roundHSLColorVals } from '$lib/util/colorConvert';
import { getRandomInt } from '$lib/util/random';
import {
  MIN_LIGHTNESS, MAX_LIGHTNESS,
  PALETTE_RANGES,
  PALETTE_LENGTH,
} from '$lib/constants';

const MAX_HUE_ROTATION = 30;
const MAX_HUE_STEP = 2;
const CENTRAL_LIGHT_HUES = [60, 180, 300];
const CENTRAL_DARK_HUES = [120, 240, 360];

/**
 * Takes a color in any position on the palette, and generates
 * the full palette from it.
 *
 * - First convert color to oklch() space.
 * - Based on lightness, place in the appropriate palette position
 *   (See PALETTE_LIGHTNESS_RANGES).
 * - For each lighter/darker color step, randomly add/- hue to HSL of color.
 *   (See HUE_RANGE).
 * - With the new color, convert to CIELAB space, and then modify lightness
 *   (so it fits in the next range in PALETTE_LIGHTNESS_RANGE).
 * - Repeat until all positons filled!
 *
 * Accepts: HSL color, and 'position' number in palette index.
 * Returns: A set of 8 HSL colors in an array, where the indexes
 *          correspond to positions in the palette.
 */
function generatePaletteFromColor(color: HSL) : HSL[] {
  const res : HSL[] = [];
  const oklch = HSLToOKLCH(color);
  const pos = getPalettePos(oklch.l  * 100); // Scale to 0-100 used in PALETTE_RANGES

  let currLightColor = color;
  let totalHueRotation = 0;
  for (let i = pos - 1; i >= 0; i--) {
    let col = currLightColor;

    const remainingRot = MAX_HUE_ROTATION - totalHueRotation;
    if (remainingRot > 0) {
      const rotation = Math.min(remainingRot, getRandomHueRotation());
      col = rotateHueLighter(col, rotation);
      totalHueRotation += rotation;
    }
    currLightColor = getNextColor(col, i);
    res.push(currLightColor);
  }

  res.reverse();
  res.push(color);

  let currDarkColor = color;
  totalHueRotation = 0;
  for (let i = pos + 1; i < PALETTE_LENGTH; i++) {
    let col = currLightColor;

    const remainingRot = MAX_HUE_ROTATION - totalHueRotation;
    if (remainingRot > 0) {
      const rotation = Math.min(remainingRot, getRandomHueRotation());
      col = rotateHueDarker(col, rotation);
      totalHueRotation += rotation;
    }
    currDarkColor = getNextColor(currLightColor, i);
    res.push(roundHSLColorVals(currDarkColor));
  }

  return res;
}

function getPalettePos(l: number) {
  if (l < MIN_LIGHTNESS) {
    return PALETTE_LENGTH - 1;
  } else if (l >= MAX_LIGHTNESS){
    return 0;
  } else {
    for (const [index, range] of PALETTE_RANGES.entries()) {
      if (l >= range.min && l < range.max) return index;
    }
  }
  console.warn(`Palette position not within expected range, l=${l}.\nReturning 0`);
  return 0;
}

function getNextColor(color: HSL, paletteIndex: number) {
  const oklch = HSLToOKLCH(color);
  const range = PALETTE_RANGES[paletteIndex];
  const minDiff = Math.round((range.max + range.min)/2 - range.min) - 1;
  oklch.l = getRandomInt(range.min + minDiff, range.max)/100 // Scale to HCL 0-100;

  return OKLCHToHSL(oklch);
}

function getRandomHueRotation() {
  // Lean more towards 0/1
  const doZeroOrOne = getRandomInt(0, 2);
  if (doZeroOrOne < 2) return doZeroOrOne;

  return getRandomInt(2, MAX_HUE_STEP);
}

function rotateHueDarker(color: HSL, rot: number) : HSL {
  let hue = color.h;
  if (CENTRAL_LIGHT_HUES.includes(hue)) {
    hue = randomlyIncreaseOrDecreaseHue(hue);
  }
  if (hue > 300) hue = Math.min(hue + rot, 360);
  else if (hue > 240) hue = Math.max(hue - rot, 240);
  else if (hue > 180) hue = Math.min(hue + rot, 240);
  else if (hue > 120) hue =  Math.max(hue - rot, 120);
  else if (hue > 60) hue = Math.max(hue + rot, 120);
  else hue = Math.max(hue - rot, 0);

  return {
    h: hue,
    s: color.s,
    l: color.l
  }
}
function rotateHueLighter(color: HSL, rot:number) : HSL {
  let hue = color.h;
  if (CENTRAL_DARK_HUES.includes(hue)) {
    hue = randomlyIncreaseOrDecreaseHue(hue);
  }
  if (hue > 300) hue = Math.max(hue - rot, 300);
  else if (hue > 240) hue = Math.min(hue + rot, 300);
  else if (hue > 180) hue = Math.max(hue - rot, 180);
  else if (hue > 120) hue = Math.min(hue + rot, 180);
  else if (hue > 60) hue = Math.max(hue - rot, 60);
  else hue = Math.min(hue + rot, 60);

  return {
    h: hue,
    s: color.s,
    l: color.l
  }
}

/**
 * Randomly increase or decrease by a small amount.
 * - Good for a "central" hue which we can rotate both ways
 *   to make lighter/darker. For example, an exact 60deg yellow
 *   can rotate towards orange or green!
 */
function randomlyIncreaseOrDecreaseHue(hue: number) {
  return hue + (Math.random() >= 0.5 ? 0.01 : -0.01)
}

export {
  generatePaletteFromColor
}
