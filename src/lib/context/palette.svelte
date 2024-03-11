<script lang=ts context="module">
  import { setContext, getContext } from 'svelte';
  import { paletteStore } from '$lib/stores/palette';

  type PaletteStoreType = ReturnType<typeof paletteStore>

  function createPaletteContext(key: string): PaletteStoreType {
    const store = paletteStore();
    setContext<PaletteStoreType>(key, store);
      return getPaletteContext(key);
  }

  function getPaletteContext(key: string): PaletteStoreType {
    return getContext<PaletteStoreType>(key);
  }

  export {
    createPaletteContext,
    getPaletteContext,
}
</script>
