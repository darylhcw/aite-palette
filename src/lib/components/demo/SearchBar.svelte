<script lang="ts">
  import SearchIcon from '$lib/components/svg/Search.svelte';
  export let query: string = "";
</script>

<div class="relative flex items-center h-12 drop-shadow-md">
  <div class="absolute h-1/2 left-3">
    <SearchIcon fill="slate-500"/>
  </div>
  <input class="input w-full pl-11 border-slate-500 bg-white"
         type="text" bind:value={query} placeholder="Search..."/>
</div>
