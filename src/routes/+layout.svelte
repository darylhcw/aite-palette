<script>
  import "../app.css";
  import { base } from '$app/paths'
</script>

<svelte:head>
  <link rel="apple-touch-icon" sizes="180x180" href="{base}/icons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="{base}/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="{base}/icons/favicon-16x16.png">
  <link rel="mask-icon" href="{base}/icons/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#2b5797">
  <meta name="theme-color" content="#ffffff">
  <link rel="manifest" href="site.webmanifest">
  <meta name="viewport" content="width=device-width" />
</svelte:head>

<slot />