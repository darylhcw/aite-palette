<script lang="ts">
  import ColorPicker from '$lib/components/colorPicker/ColorPicker.svelte';
  import { getHSLFromCSSVar, setHSLToCSSVar } from '$lib/util/colorConvert';
  import { getPaletteContext } from '$lib/context/palette.svelte';
  import { mainPaletteVarsUpdated } from '$lib/stores/mainPaletteCSSHex';
  import type { PaletteChangeEvent, PaletteComponent } from '$lib/types/palette';
  import type { HSL } from '$lib/types/colors';

  export let paletteKey: string;
  export let palettePos: number;
  export let cssColorVar = "";
  const paletteContext = getPaletteContext(paletteKey);
  const combinedKey = `PALETTE_COLOR_${paletteKey}_${palettePos}`

  if (!paletteKey || palettePos === undefined) {
    console.error("No paletteKey/palettePos for ColorPicker");
  }

  function paletteChangeEvent(event: PaletteChangeEvent) {
    if (event.type !== 'change') return;
    const hsl = {
        h: event.h,
        s: event.s,
        l: event.l,
      }
    setHSLToCSSVar(hsl, cssColorVar);
    mainPaletteVarsUpdated();
  }
  function registerColorPalette(palette: PaletteComponent) {
    const paletteColor = {
      getPaletteColor: () => {
        return palette.getColor();
      },
      setPaletteColor: (col: HSL) => {
        palette.setColor(col);
        setHSLToCSSVar(col, cssColorVar);
      }
    }
    paletteContext?.addColor(paletteColor, palettePos);
  }
 </script>

<ColorPicker pickerKey={combinedKey}
             defaultColor={getHSLFromCSSVar(cssColorVar)}
             paletteChangeEvent={paletteChangeEvent}
             afterPaletteInit={registerColorPalette}/>
