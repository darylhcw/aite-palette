<script lang="ts">
  import ColorPicker from '$lib/components/colorPicker/ColorPicker.svelte';
  import { generatePaletteFromColor } from '$lib/util/paletteGenerator';
  import { getPaletteContext } from '$lib/context/palette.svelte';
  import { mainPaletteVarsUpdated } from '$lib/stores/mainPaletteCSSHex';
  import { updateDaisyUIThemeColors } from '$lib/daisyUI/themeColors';
  import type { HSL } from '$lib/types/colors';
  import type { PaletteComponent } from '$lib/types/palette';
  import { MAIN_PALETTE_KEY } from '$lib/constants';

  export let paletteKey: string;
  export let defaultColor: HSL | string;
  export let generateText = "Generate";
  export let btnType = "btn-primary"
  export let useSmallBtn = false;
  export let muteColors = false; // Used for greys.
  let palette: PaletteComponent;

  const paletteContext = getPaletteContext(paletteKey);
  const key = `GENERATE_COLOR_${paletteKey}`

  if (!paletteKey) {
    console.error("No paletteKey for PaletteGenerator!");
  }

  function generatePaletteColors() {
    if (!palette) return;

    const col = palette.getColor();
    const { h, s, l } = col;
    const newColors = generatePaletteFromColor({ h:h, s:s, l:l }, muteColors);
    paletteContext?.setPaletteColors(newColors);

    if (paletteKey === MAIN_PALETTE_KEY) {
      mainPaletteVarsUpdated();
    }

    updateDaisyUIThemeColors();
  }
</script>

<div class="flex items-center justify-center gap-3">
  <ColorPicker pickerKey={key}
              defaultColor={defaultColor}
              afterPaletteInit={(p) => { palette = p }}/>

  <button class="btn {btnType} btn-outline { useSmallBtn ? "btn-xs" : "btn-sm" }"
          on:click={generatePaletteColors}>
    {generateText}
  </button>
</div>
