<script lang="ts">
  export let tag = "<TAG>";
  export let size : "small" | "normal" = "small";
  export let selectable = false;
  export let selected = false;

  // Let here be an example of .. when Tailwind is not so great vs "just CSS".
  $:baseClasses = `rounded-badge px-4 py-[0.125rem] border ${size === "small" ? "text-sm" : "text-base"} font-roboto`
  let selectedClasses = "bg-slate-700 text-slate-200 border-slate-700"
  let deselectedClasses = "bg-white text-black border-slate-500"
</script>

{#if selectable}
  <button class="{baseClasses} {selected ? selectedClasses : deselectedClasses}
                 {selected ? "hover:bg-slate-500" : "hover:bg-slate-300"}
                  whitespace-pre"
          on:click>
    {selected ? "X " : ""} {tag}
  </button>
{:else}
  <div class="{baseClasses} {selected ? selectedClasses : deselectedClasses}">
    {tag}
  </div>
{/if}
