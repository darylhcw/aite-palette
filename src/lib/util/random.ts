import type { HSL } from '$lib/types/colors';

function getRandomInt(min: number, max: number) : number{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomHSL(): HSL {
  return {
    h: getRandomInt(1, 360),
    s: getRandomInt(0, 100),
    l: getRandomInt(0, 100),
  };
}

export {
  getRandomInt,
  getRandomHSL,
}