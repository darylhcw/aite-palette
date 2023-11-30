<script lang="ts">
  import { onMount } from 'svelte';
  import 'alwan/dist/css/alwan.min.css';
  import { counter } from '$lib/stores/counter';
  import { hexFromCSSVar, setHslToCSSVar } from '$lib/util/colorConvert';
  import { getPaletteContext } from '$lib/context/palette.svelte';
  import type Alwan from 'alwan';
  import type { HSL } from '$lib/types/colors';

  /**
   * paletteKey: key for palette it should belong to.
   * cssColorVar: the css var this picker binds to.
   */
  export let paletteKey: string;
  export let cssColorVar = "";
  let paletteDiv : HTMLElement | undefined;
  let palette : Alwan;

  const paletteContext = getPaletteContext(paletteKey);

  onMount(async () => {
    await import('alwan').then(module => {
      palette = new module.default(`#${paletteDiv?.id}`, {
        opacity: false,
        color: hexFromCSSVar(cssColorVar),
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

    counter.increment();
  });

  function registerPaletteColor(color: Alwan) {
    const paletteColor = {
      alwan: color,
      setPaletteColor: (col: HSL) => {
        console.log(col);
      }
    }

    paletteContext.addColor(paletteColor);
  }

  function generatePaletteColors() {
    paletteContext.debug();
  }
 </script>

<div id={"COLOR_PICKER_" + $counter} bind:this={paletteDiv} />
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