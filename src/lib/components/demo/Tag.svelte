<script lang="ts">
  export let tag = "<TAG>";
  export let size : "small" | "normal" = "small";
  export let selectable = false;
  export let selected = false;

  $:baseClasses = `rounded-badge px-4 py-[0.125rem] border border-palette-700 ${size === "small" ? "text-sm" : "text-base"} font-roboto`;
  let selectedClasses = "bg-palette-700 text-palette-100 border-palette-700 hover:bg-palette-500"
  let deselectedClasses = "bg-white text-palette-700 border-palette-500 hover:bg-palette-300"
</script>

{#if selectable}
  <button class="{baseClasses} {selected ? selectedClasses : deselectedClasses}
                  whitespace-pre"
          on:click>
    {selected ? "X " : ""} {tag}
  </button>
{:else}
  <div class="{baseClasses} {selected ? selectedClasses : deselectedClasses}
               hover:bg-current">
    {tag}
  </div>
{/if}
