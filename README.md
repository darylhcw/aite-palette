# aite-palette

Palette generator for modern looking websites with some example UIs.

I made this as a side project to learn and familiarize myself with:
- Svelte
- Tailwind
- Stable Diffusion

Was also fun to try my hand at designing some common layouts.

> Note - If you're wondering why does this have SvelteKit, I had more ideas for this project but later on decided not to pursue them.

# Problems with standard hue/shade generators

From playing around with palette/color shades generation and trying out some existing examples, I found that most naive shade/tint generators have the following issues.

1) Giving shades by adding/lowering measured lightness instead of _perceived_ lightness.
    - Simply adding X amount to the HSL values or RGB values for each color tend to produce imbalanced results. This is due to the non-linear way we [perceive lightness](https://en.wikipedia.org/wiki/Lightness). If you have something at rgb(100, 0, 0) and change it to rgb(200, 0 ,0), we won't exactly feel that it became twice as bright.

3) Not rotating hues.
    - A good main color spread doesn't always keep the same hue. If your main color is yellow for example, you would typically usually use a yellow-orange palette, where the darker colors look more "orange". This helps the palette look fuller, varied and just better.

I tried to address these when writing the algorithm for color generation.


# Algorithm

The palette generation here involves the use of the OKLCH color space, which was added in [CSS Color 4](https://www.w3.org/TR/css-color-4/) and fully supported on major browsers after mid-2023. [This post](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) gives an excellent rundown on why it was added.

1. First convert color we chose as base to OKLCH to determine the perceived lightness of the color (L in OKLCH).
2. Then determine the position on the palette based on L. The positions of colors on the palette are based L, with the center being around 50-60, darkest being 20ish and lightest being over 90ish.
3. Fill the immediate left/right of the palette by:
   - Rotating the color (HSL hue) by a few degrees (Random value 1-3deg with limits*)
   - Convert color to OKLCH space, then adjust lightness so that it is one of the values in the range of the next position.
4. Repeat until all colors are filled!

 You can see the code [here](src/lib/util/paletteGenerator.ts) for exact implementation and details!
