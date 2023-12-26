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

  onMount(() => {
    let root = document?.documentElement;
    if (root) {
      // const prev = getComputedStyle(root).getPropertyValue("--p");

      root.style.setProperty("--p", "215 25% 27%");
      root.style.setProperty("--pc", "0 0% 100%");
      root.style.setProperty("--b2", "214 32% 91%");

      // return () => root.style.setProperty("--p", prev);
    }
  });
</script>

<svelte:head>
  <title>Aite Palette</title>
  <meta name="description" content="Color palette generator for modern-looking websites with examples.">
</svelte:head>

<main class="mx-auto max-w-screen-xl px-4">
  <DemoPage>
    <Palette/>
  </DemoPage>

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

  <!-- bgColor = slate-800 -->
  <DemoPage bgColor="#1e293b">
    <TimelineDemo/>
  </DemoPage>
</main>
