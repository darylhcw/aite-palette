<script lang="ts">
  import PaletteColor from '$lib/components/colorPicker/PaletteColor.svelte';
  import PaletteGenerator from '$lib/components/colorPicker/PaletteGenerator.svelte';
  import { createPaletteContext } from '$lib/context/palette.svelte';
  import { PALETTE_LENGTH } from '$lib/constants';

  const mainPaletteKey = "main";
  createPaletteContext(mainPaletteKey);
  const paletteVars = [...Array(PALETTE_LENGTH)].map((_, i) => {
    const x = i + 1;
    return `--palette-${x}00`
  })

  const greyPaletteKey = "greys";
  createPaletteContext(greyPaletteKey);
  const greyVars = [...Array(PALETTE_LENGTH)].map((_, i) => {
    const x = i + 1;
    return `--pgreys-${x}00`
  })
</script>

<h2 class="text-5xl p-4">
  Palette
</h2>

<div class="flex mb-2 gap-2">
  <PaletteGenerator paletteKey={mainPaletteKey}
                    defaultColor="#94a3b8"
                    generateText="Generate Main" />
</div>
<div class="flex gap-x-1 flex-wrap mb-5">
  {#each paletteVars as varname, i}
    <PaletteColor paletteKey={mainPaletteKey}
                  palettePos={i}
                  cssColorVar={varname} />
  {/each}
</div>

<div class="flex mb-2 gap-2">
  <PaletteGenerator paletteKey={greyPaletteKey}
                    defaultColor="#a3a3a3"
                    generateText="Generate Greys" />
</div>
<div class="flex gap-x-1 flex-wrap">
  {#each greyVars as varname, i}
    <PaletteColor paletteKey={greyPaletteKey}
                  palettePos={i}
                  cssColorVar={varname} />
  {/each}
</div>
