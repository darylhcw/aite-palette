<script lang="ts">
  import Navbar from './Navbar.svelte';
  export let paddings = true;
  export let bg: "light" | "dark" = "light";
</script>

<section class="mb-8 mx-auto m max-w-screen-xl overflow-hidden rounded-xl sm:rounded-2xl
                border-t border-slate-200">
  <Navbar/>
  {#if paddings}
    <div class="pt-10 pb-16 { bg === "light" ? "bg--100" : "bg-palette-800" }">
      <slot/>
    </div>
  {:else}
    <slot/>
  {/if}
</section>

<style>
  section {
    box-shadow: 0px 4px 8px -4px #4b5563;
  }
</style>