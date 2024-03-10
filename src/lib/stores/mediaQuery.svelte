<script lang=ts context="module">
  /**
   * Check if matching breakpoint is true.
   * - Note that if the smallest is true, eveything else is too.
   * - You have to handle the cases manually appropriately.
   */
  import { derived, writable }  from 'svelte/store';

  const defaultBPs = {
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  }
  type BPKey = keyof typeof defaultBPs;

  const mediaQueryInner = writable(defaultBPs, (set) => {
    if (typeof window === "undefined") return;

    const breakpoints = [
      { value: "sm", mediaquery: window.matchMedia("(min-width: 640px)") },
      { value: "md", mediaquery: window.matchMedia("(min-width: 768px)") },
      { value: "lg", mediaquery: window.matchMedia("(min-width: 1024px)") },
      { value: "xl", mediaquery: window.matchMedia("(min-width: 1280px)") },
      { value: "xxl", mediaquery: window.matchMedia("(min-width: 1536px)") },
    ];

    let bps = {...defaultBPs};
    for (const bp of breakpoints) {
      const key = bp.value as BPKey;
      if (bp.mediaquery.matches === true) {
        bps[key] = true;
      }
      bp.mediaquery.addEventListener('change', (event) => {
        if (event.matches === bps[key]) return;

        mediaQueryInner.update((bps) => {
          const newBps = bps;
          newBps[key] = event.matches;
          return newBps;
        });
      });
    }
    set(bps);
  });

  export const mediaQuery = derived(mediaQueryInner, ($mediaQueryInner) => $mediaQueryInner);
</script>
