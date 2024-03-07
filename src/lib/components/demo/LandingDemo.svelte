<script lang="ts">
  import { mediaQuery } from '$lib/stores/mediaQuery.svelte';
  import { BRAND_TAILWIND_CSS as palette } from '$lib/constants';

  const rectPaletteOffsetRem = 0.75;
  const rectPaletteOffsetRemMobile = 0.5;
  const headerMarginRightRem = (palette.length + 1) * rectPaletteOffsetRem;
</script>

<div class="w-full flex items-center sm:flex-row flex-col-reverse bg-white">
  <div class="sm:w-1/2 w-full flex justify-center"
       style={$mediaQuery?.sm ? `margin-right:${headerMarginRightRem}rem`: ""}>
    <header class="sm:p-0 p-2 ml-6">
      <h2 class="sm:mb-3 mb-1 lg:text-4xl min-[52.5rem]:text-3xl md:text-2xl min-[60rem]:text-xl text-lg font-semibold
                 text-pgreys-900">
        See Your Palette in Action
      </h2>
      <p class="mb-3 lg:text-base min-[52.5rem]:text-sm leading-snug text-pgreys-800">
        Simple and modern examples for inspiration.
      </p>
      <button class="btn btn-primary btn-sm md:btn-md w-24 shadow-md  ">
        Primary
      </button>
      <button class="btn btn-sm md:btn-md w-24 mb-6 shadow-md">
        Secondary
      </button>
    <header/>
  </div>
  <div class={`relative sm:w-1/2 w-full flex flex-col items-center`}>
    <div class="relative max-h-96 sm:max-h-full w-full sm:self-center flex justify-center bg-black z-10
                after:absolute after:w-full after:h-full after:top-0 after:bg-palette-100 after:opacity-50 after:mix-blend-multiply">
      <img class="max-w-md sm:max-w-full w-full max-h-96 sm:max-h-none object-cover sm:object-fill"
           src="/images/brushbite.png"
           alt="demo landing hero"/>
    </div>
    <!-- Wide-screen horizontal palette effect  -->
    {#each palette as color, i}
      <div class={`hidden sm:block absolute h-full w-full ${color} top-0`}
           style={`left: -${(i+1)*rectPaletteOffsetRem}rem; z-index: ${9-i};`}/>
    {/each}
    <!-- Small-screen vertical palette effect  -->
    {#each palette as color, i}
      <div class={`sm:hidden w-full ${color} ${i == palette.length-1 ? "mb-3": ''}`}
           style={`height: ${rectPaletteOffsetRemMobile}rem;`}/>
    {/each}
  </div>
</div>
