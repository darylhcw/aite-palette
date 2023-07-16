<script lang="ts">
  import Navbar from './Navbar.svelte';

  export let paddings: boolean = true;
</script>

<section class="mb-8 overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100">
  <Navbar/>
  {#if paddings}
    <div class="pt-10 pb-16">
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