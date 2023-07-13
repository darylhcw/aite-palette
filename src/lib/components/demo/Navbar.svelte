<script>
  import { palette } from '$stores/paletteStore';
  import { mediaQuery } from '$stores/MediaQuery.svelte';
  import hamburgerIcon from '$assets/icons/hamburger.svg';

  const brandCircleOffsetRem = 0.4;
  $: brandMLRem = $palette.length * brandCircleOffsetRem + 2;

  $: {
    if (showMenu && $mediaQuery.sm) showMenu = false;
  }

  let navLinks = ["Profile", "Dashboard", "Blog", "Chat"]
  let showMenu = false;

  function toggleHamburger() {
    showMenu = !showMenu
  }

</script>

<div class="relative navbar shadow bg-white z-50">
  <div class="navbar-start relative flex align-center">
    <button class="sm:hidden cursor-pointer" on:click={toggleHamburger}>
      <img class="w-8 mr-2"
           src={hamburgerIcon}
           alt="hamburger menu"
           tabIndex={0}/>
    </button>
    {#if showMenu}
      <ul class="menu absolute top-full -left-2 rounded-box z-20 bg-white shadow-md shadow-slate-500">
        {#each navLinks as page}
          <li><a href={'#'}>{page}</a></li>
        {/each}
      </ul>
    {/if}
    <div class="relative md:h-8 h-6 self-center">
      {#each [...$palette].reverse() as color, i}
        <div class={`absolute md:h-8 md:w-8 h-6 w-6 rounded-full ${color}`}
            style={`left: ${i*brandCircleOffsetRem}rem;`}>
        </div>
      {/each}
    </div>
    <a class="font-semibold md:text-base text-xs -translate-x-2 md:translate-x-0"
       style={`margin-left: ${brandMLRem}rem`} href={'#'}>
      Brand
    </a>
  </div>

  <div class="navbar-center sm:flex hidden">
    <ul class="menu menu-horizontal">
      {#each navLinks as page}
        <li>
          <a class="font-semibold md:text-base text-xs" href={'#'}>{page}</a>
        </li>
      {/each}
    </ul>
  </div>

  <div class="navbar-end">
    <button class="btn btn-sm sm:btn-md md:text-sm text-xs shadow">
      Button
    </button>
  </div>
</div>
