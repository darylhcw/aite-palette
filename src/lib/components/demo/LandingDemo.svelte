<script>
  import { palette } from '$stores/paletteStore';
  import { mediaQuery } from '$stores/MediaQuery.svelte';

  const rectPaletteOffsetRem = 0.75;
  const rectPaletteOffsetRemMobile = 0.5;
  $: headerMarginRightRem = ($palette.length + 1) * rectPaletteOffsetRem;
</script>

<div class="w-full flex items-center sm:flex-row flex-col-reverse bg-white">
  <div class="sm:w-1/2 w-full flex justify-center"
       style={$mediaQuery?.sm ? `margin-right:${headerMarginRightRem}rem`: ""}>
    <header class="sm:p-0 p-2 ml-6">
      <h2 class="lg:mb-3 sm:mb-1 lg:text-4xl min-[840px]:text-3xl md:text-2xl min-[700px]:text-xl text-lg font-semibold">
        See Your Palette in Action
      </h2>
      <p class="mb-2 lg:text-base min-[840px]:text-sm sm:text-xs text-xs">
        Examples made with DaisyUI and Tailwind CSS.
      </p>
      <button class="btn btn-primary btn-sm md:btn-md md:text-sm text-xs shadow-md  ">
        Randomize
      </button>
      <button class="btn btn-sm md:btn-md mb-6 md-text-sm text-xs shadow-md">
        Randomize
      </button>
    <header/>
  </div>
  <div class={`relative sm:w-1/2 w-full flex flex-col items-center`}>
    <div class="relative max-h-96 sm:max-h-full w-full sm:self-center flex justify-center bg-black z-10">
      <img class="max-w-md sm:max-w-full w-full max-h-96 sm:max-h-none object-cover sm:object-fill"
          src="/images/brushbite.png"
          alt="demo landing hero"/>
    </div>
    <!-- Wide-screen horizontal palette effect  -->
    {#each $palette as color, i}
      <div class={`hidden sm:block absolute h-full w-full ${color} top-0`}
           style={`left: -${(i+1)*rectPaletteOffsetRem}rem; z-index: ${9-i};`}/>
    {/each}
    <!-- Small-screen vertical palette effect  -->
    {#each $palette as color, i}
      <div class={`sm:hidden w-full ${color} ${i == $palette.length-1 ? "mb-3": ''}`}
           style={`height: ${rectPaletteOffsetRemMobile}rem;`}/>
    {/each}
  </div>
</div>
