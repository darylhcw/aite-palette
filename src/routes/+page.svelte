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

  onMount(() => {
    updateDaisyUIThemeColors();
  });
</script>

<svelte:head>
  <title>Aite Palette</title>
  <meta name="description" content="Color palette generator for modern-looking websites with examples.">
</svelte:head>

<main class="px-4">
  <section class="-mx-4 mb-8 p-6 sticky top-0 overflow-hidden z-50 bg-white shadow-md">
    <div class="mx-auto max-w-screen-xl">
      <Palette/>
    </div>
    <button>
    </button>
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
