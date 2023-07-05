<script>
  import LandingDemo from '$components/demo/LandingPage.svelte';
</script>

<main class="mx-auto max-w-screen-xl px-4">
  <section>
    <h2 class="text-5xl p-4">
      Palette
    </h2>
  </section>

  <section>
    <LandingDemo/>
  </section>
</main>

<style>
  section {
    margin-bottom: 2rem;
    border-radius: max(2.5%, 6px);
    box-shadow: 0px 4px 4px -4px #4b5563;
    overflow: hidden;
  }
</style>