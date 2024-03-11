import type { HSL } from '$lib/types/colors';

// Inclusive of both min/max, passing in 0,1 gives you 0-1.
function getRandomInt(min: number, max: number) : number{
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
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