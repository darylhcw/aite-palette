<script lang="ts">
  import PaletteColor from '$lib/components/colorPicker/PaletteColor.svelte';
  import PaletteGenerator from '$lib/components/colorPicker/PaletteGenerator.svelte';
  import { createPaletteContext } from '$lib/context/palette.svelte';
  import { PALETTE_LENGTH, MAIN_PALETTE_KEY, GREY_PALETTE_KEY } from '$lib/constants';

  createPaletteContext(MAIN_PALETTE_KEY);
  const paletteVars = [...Array(PALETTE_LENGTH)].map((_, i) => {
    const x = i + 1;
    return `--palette-${x}00`
  })

  createPaletteContext(GREY_PALETTE_KEY);
  const greyVars = [...Array(PALETTE_LENGTH)].map((_, i) => {
    const x = i + 1;
    return `--pgreys-${x}00`
  })
</script>

<div class="flex gap-12">
  <div>
    <div class="flex mb-3 gap-2">
      <PaletteGenerator paletteKey={MAIN_PALETTE_KEY}
                        defaultColor="#94a3b8"
                        generateText="Generate Main" />
    </div>
    <div class="flex gap-x-1 flex-wrap mb-5">
      {#each paletteVars as varname, i}
        <PaletteColor paletteKey={MAIN_PALETTE_KEY}
                      palettePos={i}
                      cssColorVar={varname} />
      {/each}
    </div>
  </div>
  <div>
    <div class="flex mb-3 gap-2">
      <PaletteGenerator paletteKey={GREY_PALETTE_KEY}
                        defaultColor="#a3a3a3"
                        generateText="Generate Greys"
                        btnType="btn-neutral"
                        muteColors={true}/>
    </div>
    <div class="flex gap-x-1 flex-wrap">
      {#each greyVars as varname, i}
        <PaletteColor paletteKey={GREY_PALETTE_KEY}
                      palettePos={i}
                      cssColorVar={varname} />
      {/each}
    </div>
  </div>
</div>
<p class="text-neutral-700">
  Select a base color, then hit generate! Greys will be muted if necessary. Note not all colors are used.
</p>
