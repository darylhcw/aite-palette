<script>
  import questionImg from '$assets/images/question.webp'
</script>

<div class="flex flex-col items-center  ">
  <figure class="relative sm:w-96 w-64 rounded-full overflow-hidden
                 after:absolute after:w-full after:h-full after:top-0 after:rounded-full
                 after:shadow-[inset_0_4px_8px_4px_rgba(0,0,0,0)] after:shadow-slate-100">
    <img src={questionImg}
         alt="A girl with a finger to her chin, confused"
         loading="lazy"
         class="border border-slate-200 rounded-full" />
  </figure>
  <h3 class="-mt-14 -mb-2 py-2 px-8 rounded-2xl z-20 rotate-1
              sm:text-2xl text-lg font-semibold text-pgreys-700 bg-white shadow-md shadow-pgreys-500">
    No Posts Found!
  </h3>
  <p class="py-3 px-5 rounded-2xl sm:text-xl text-base text-palette-800 bg-palette-300
            shadow-[inset_0_4px_4px_0_rgba(0,0,0,0)] shadow-pgreys-400 z-10">
    Please try a different search query and/or clear search filters.
  </p>
</div>