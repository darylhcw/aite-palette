// Update DaisyUI theme color CSS vars to match our palette.
function updateDaisyUIThemeColors() {
  copyCSSVar("--palette-400", "--n");  // neutral - Used on menu:active

  copyCSSVar("--palette-200", "--b2"); // base2 - menu buttons
  copyCSSVar("--palette-300", "--b3"); // base3 - buttons
  copyCSSVar("--palette-900", "--bc"); // base content - content on base color

  copyCSSVar("--palette-800", "--p");  // primary - darker buttons
  copyCSSVar("--palette-500", "--pf"); // primary:focus
  copyCSSVar("--pgreys-100", "--pc"); // primary content - content on primary color
}

function copyCSSVar(from: string, to: string) {
  const val = getComputedStyle(document.documentElement).getPropertyValue(from);
  document.documentElement.style.setProperty(to, val);
}

export {
  updateDaisyUIThemeColors
}