<script lang="ts">
  // We use a library for colorPicker instead of native input type="color"
  // because cross-browser support for that is terrible.
  // The picker implementation is COMPLETELY different on chrome/firefox.
  import { onMount } from 'svelte';
  import 'alwan/dist/css/alwan.min.css';
  import { getHSLFromCSSVar, setHslToCSSVar } from '$lib/util/colorConvert';
  import { generatePaletteFromColor } from '$lib/util/paletteGenerator';
  import { getPaletteContext } from '$lib/context/palette.svelte';
  import type Alwan from 'alwan';
  import type { HSL } from '$lib/types/colors';

  export let paletteKey: string;
  export let palettePos: number;
  export let cssColorVar = "";
  let paletteDiv : HTMLElement | undefined;
  let palette : Alwan;
  const paletteContext = getPaletteContext(paletteKey);

  onMount(async () => {
    if (paletteKey === undefined && palettePos === undefined) {
      console.error("No paletteKey/palettePos for ColorPicker");
    }

    await import('alwan').then(module => {
      palette = new module.default(`#${paletteDiv?.id}`, {
        opacity: false,
        color: getHSLFromCSSVar(cssColorVar),
        format: "hex",
      });
    });

    palette.on("change", (event) => {
      if (event.type !== "change") return;
      const hsl = {
        h: event.h,
        s: event.s,
        l: event.l,
      }
      setHslToCSSVar(hsl, cssColorVar)
    });

    registerPaletteColor(palette);
  });

  function registerPaletteColor(color: Alwan) {
    const paletteColor = {
      alwan: color,
      setPaletteColor: (col: HSL) => {
        color.setColor(col);
        setHslToCSSVar(col, cssColorVar);
      }
    }
    paletteContext?.addColor(paletteColor, palettePos);
  }

  function generatePaletteColors() {
    const alwanColor = palette.getColor()
    const { h, s, l } = alwanColor;
    const newColors = generatePaletteFromColor({ h:h, s:s, l:l});
    paletteContext?.setPaletteColors(newColors);
  }
 </script>

<div id={`COLOR_PICKER_${paletteKey}_${palettePos}`} bind:this={paletteDiv} />
<button on:click={generatePaletteColors}>
  GENERATE
</button>

<style>
  /* Markup generated outside of Svelte will need 'global'. */
  :global(.alwan__button.alwan__reference) {
    border: none;
    outline: none;
  }
</style>