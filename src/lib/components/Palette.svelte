<script lang="ts">
  import ColorPicker from '$lib/components/ColorPicker.svelte';
  import { createPaletteContext } from '$lib/context/palette.svelte';

  const mainPaletteKey = "main";
  createPaletteContext(mainPaletteKey);
  const paletteVars = [...Array(9)].map((_, i) => {
    const x = i + 1;
    return `--palette-${x}00`
  })

  const greyPaletteKey = "greys";
  createPaletteContext(greyPaletteKey);
  const greyVars = [...Array(9)].map((_, i) => {
    const x = i + 1;
    return `--pgreys-${x}00`
  })
</script>

<h2 class="text-5xl p-4">
  Palette
</h2>

<div class="flex gap-x-1">
  {#each paletteVars as varname}
    <ColorPicker paletteKey={mainPaletteKey}
                 cssColorVar={varname} />
  {/each}
</div>

<div class="flex gap-x-1">
  {#each greyVars as varname}
    <ColorPicker paletteKey={greyPaletteKey}
                 cssColorVar={varname} />
  {/each}
</div>

<div class="mt-4">
  <div class="w-6 h-6 bg-palette-100 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-palette-200 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-palette-300 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-palette-400 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-palette-500 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-palette-600 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-palette-700 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-palette-800 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-palette-900 inline-block border-black border-2"></div>
</div>

<div>
  <div class="w-6 h-6 bg-pgreys-100 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-pgreys-200 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-pgreys-300 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-pgreys-400 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-pgreys-500 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-pgreys-600 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-pgreys-700 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-pgreys-800 inline-block border-black border-2"></div>
  <div class="w-6 h-6 bg-pgreys-900 inline-block border-black border-2"></div>
</div>
