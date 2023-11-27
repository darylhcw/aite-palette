<script lang="ts">
  import { onMount } from 'svelte';
  import 'alwan/dist/css/alwan.min.css';
  import { counter } from '$lib/stores/counter';
  import { hexFromCSSVar, setHslToCSSVar } from '$lib/util/colorConvert';

  export let cssColorVar = "";
  let paletteDiv;
  let palette;

  onMount(async () => {
    let Alwan;
    await import('alwan').then(module => {
      Alwan = module.default;
    });

    palette = new Alwan(`#${paletteDiv.id}`, {
      opacity: false,
      color: hexFromCSSVar(cssColorVar),
      format: "hex",
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

    counter.increment();
  });
 </script>

<div id={"COLOR_PICKER_" + $counter} bind:this={paletteDiv}>

</div>

<style>
  /* Markup generated outside of Svelte will need 'global'. */
  :global(.alwan__button.alwan__reference) {
    border: none;
    outline: none;
  }
</style>