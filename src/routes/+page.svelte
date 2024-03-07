<script lang="ts">
  import Palette from '$components/Palette.svelte';
  import DemoPage from '$components/demo/DemoPage.svelte';
  import LandingDemo from '$components/demo/LandingDemo.svelte';
  import ProfileDemo from '$components/demo/ProfileDemo.svelte';
  import BlogDemo from '$components/demo/BlogDemo.svelte';
  import ChatDemo from '$components/demo/ChatDemo.svelte';
  import DataDemo from '$components/demo/DataDemo.svelte';
  import TimelineDemo from '$components/demo/TimelineDemo.svelte';
  import { onMount } from 'svelte';
  import { updateDaisyUIThemeColors } from '$lib/daisyUI/themeColors'
  import upArrow from '$lib/assets/icons/up-arrow.svg';
  import downArrow from '$lib/assets/icons/down-arrow.svg';

  onMount(() => {
    updateDaisyUIThemeColors();
  });

  let paletteCollapsed = false;
</script>

<svelte:head>
  <title>Aite Palette</title>
  <meta name="description" content="Color palette generator for modern-looking websites with examples.">
</svelte:head>

<main class="px-4">
  <section class="-mx-4 mb-8 p-6 pb-2 { paletteCollapsed ? "py-3" : "" } sticky top-0 overflow-hidden z-50 bg-white shadow-md transition-all">
    <div class="mx-auto max-w-screen-xl">
      <Palette collapsed={paletteCollapsed}/>
    </div>
    <div class="flex justify-center mt-4 z-10">
      {#if paletteCollapsed}
        <button class="z-10"
                on:click={ () => paletteCollapsed = false }>
          <img src={downArrow} alt="expand"/>
        </button>
      {:else}
        <button class="z-10"
                on:click={ () => paletteCollapsed = true }>
          <img src={upArrow} alt="collapse"/>
        </button>
      {/if}
    <div>
  </section>

  <DemoPage paddings={false}>
    <LandingDemo/>
  </DemoPage>

  <DemoPage>
    <ProfileDemo/>
  </DemoPage>

  <DemoPage>
    <BlogDemo/>
  </DemoPage>

  <DemoPage>
    <BlogDemo query="Never gonna give you up?"/>
  </DemoPage>

  <DemoPage>
    <ChatDemo/>
  </DemoPage>

  <DemoPage>
    <DataDemo/>
  </DemoPage>

  <DemoPage bg="dark">
    <TimelineDemo/>
  </DemoPage>
</main>
