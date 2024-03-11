<script lang="ts">
  import PaletteColor from '$lib/components/colorPicker/PaletteColor.svelte';
  import PaletteGenerator from '$lib/components/colorPicker/PaletteGenerator.svelte';
  import { createPaletteContext } from '$lib/context/palette.svelte';
  import { PALETTE_LENGTH, MAIN_PALETTE_KEY, GREY_PALETTE_KEY } from '$lib/constants';
  import Copy from '$lib/components/svg/Copy.svelte';

  export let collapsed = false;

  const mainPalette = createPaletteContext(MAIN_PALETTE_KEY);
  const paletteVars = [...Array(PALETTE_LENGTH)].map((_, i) => {
    const x = i + 1;
    return `--palette-${x}00`
  })

  const greyPalette = createPaletteContext(GREY_PALETTE_KEY);
  const greyVars = [...Array(PALETTE_LENGTH)].map((_, i) => {
    const x = i + 1;
    return `--pgreys-${x}00`
  })

  function copyMain() {
    const text = mainPalette.copyColorsHex();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      console.error('No Clipboard API.');
    }
  }

  function copyGreys() {
    const text = greyPalette.copyColorsHex();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      console.error('No Clipboard API.');
    }
  }
</script>

<div class="flex gap-x-12 { collapsed ? "gap-y-3": "gap-y-6" } flex-col sm:flex-row">
  <div>
    <div class="flex { collapsed ? "mb-2" : "mb-4" } transition-all">
      <PaletteGenerator paletteKey={MAIN_PALETTE_KEY}
                        defaultColor="#94a3b8"
                        generateText="Generate Main"
                        useSmallBtn={collapsed} />
    </div>
    <div class="flex gap-x-2">
      <div class="flex gap-x-0.5">
        {#each paletteVars as varname, i}
          <PaletteColor paletteKey={MAIN_PALETTE_KEY}
                        palettePos={i}
                        cssColorVar={varname} />
        {/each}
      </div>
      <button class="h-8 -mt-0.5 flex-shrink-0"
              on:click={copyMain}>
        <Copy fill="text-palette-700"
              hoverFill="hover:text-palette-400"
              on:click={copyMain}/>
      </button>
    </div>
  </div>
  <div>
    <div class="flex { collapsed ? "mb-1" : "mb-3" } transition-all">
      <PaletteGenerator paletteKey={GREY_PALETTE_KEY}
                        defaultColor="#a3a3a3"
                        generateText="Generate Greys"
                        btnType="btn-neutral"
                        muteColors={true}
                        useSmallBtn={collapsed} />
    </div>
    <div class="flex gap-x-2">
      <div class="flex gap-x-0.5">
        {#each greyVars as varname, i}
          <PaletteColor paletteKey={GREY_PALETTE_KEY}
                        palettePos={i}
                        cssColorVar={varname} />
        {/each}
      </div>
      <button class="h-8 -mt-0.5 flex-shrink-0"
              on:click={copyGreys}>
        <Copy fill="text-pgreys-700"
              hoverFill="hover:text-pgreys-400"/>
      </button>
    </div>
  </div>
</div>
<p class="{ collapsed ? "h-0 opacity-0" : "mt-4" } text-neutral-700 transition-all">
  Click the square at the top-left to select a color, then hit generate! Greys will be muted if necessary. Note not all colors are used.
</p>
