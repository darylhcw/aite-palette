<script lang="ts">
  // We use a library for colorPicker instead of native input type="color"
  // because cross-browser support for that is terrible.
  // The picker implementation is COMPLETELY different on chrome/firefox.
  import { onMount } from 'svelte';
  import type Alwan from 'alwan';
  import type { HSL } from '$lib/types/colors';
  import type { PaletteChangeEvent, PaletteComponent } from '$lib/types/palette';
  import 'alwan/dist/css/alwan.min.css';

  export let pickerKey: string;
  export let defaultColor: HSL | string;
  export let paletteChangeEvent: ((event: PaletteChangeEvent) => void ) | undefined = undefined;
  export let afterPaletteInit: ((palette: PaletteComponent) => void) | undefined = undefined;
  let paletteDiv : HTMLElement | undefined;
  let palette : Alwan;

  onMount(async () => {
    if (pickerKey === undefined || pickerKey === '') {
      console.error("No pickerKey for ColorPicker!!");
    }

    await import('alwan').then(module => {
      palette = new module.default(`#${paletteDiv?.id}`, {
        opacity: false,
        color: defaultColor,
        format: "hex",
      });
    });
    palette.on("change", (event) => {
      if (paletteChangeEvent) {
        paletteChangeEvent(event);
      }
    })
    if (afterPaletteInit) afterPaletteInit(palette);
  });
 </script>

<div id={pickerKey} bind:this={paletteDiv} />

<style>
  /* Markup generated outside of Svelte will need 'global'. */
  :global(.alwan__button.alwan__reference) {
    border: none;
    outline: none;
  }
</style>