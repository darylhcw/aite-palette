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
    const newColors = generatePaletteFromColor({ h:h, s:s, l:l });
    paletteContext?.setPaletteColors(newColors);

    if (paletteKey === MAIN_PALETTE_KEY) {
      mainPaletteVarsUpdated();
    }

    updateDaisyUIThemeColors();
  }
</script>

<ColorPicker pickerKey={key}
            defaultColor={defaultColor}
            afterPaletteInit={(p) => { palette = p }}/>

<button on:click={generatePaletteColors}>
  {generateText}
</button>
