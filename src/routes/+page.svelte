<script lang="ts">
  import DemoPage from '$components/demo/DemoPage.svelte';
  import LandingDemo from '$components/demo/LandingDemo.svelte';
  import ProfileDemo from '$components/demo/ProfileDemo.svelte';
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

<main class="mx-auto max-w-screen-xl px-4">
  <DemoPage>
    <h2 class="text-5xl p-4">
      Palette
    </h2>
  </DemoPage>

  <DemoPage paddings={false}>
    <LandingDemo/>
  </DemoPage>

  <DemoPage>
    <ProfileDemo/>
  </DemoPage>
</main>
