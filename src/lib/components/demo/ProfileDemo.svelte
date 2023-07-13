<script>
  import profilePic from '$assets/images/emmaProfile.png';
  import CameraIcon from '$lib/components/svg/camera.svelte';

  let details = [
    {
      label: "First Name",
      value: "Emma",
    },
    {
      label: "Last Name",
      value: "Paletto",
    },
    {
      label: "Company",
      value: "Palette Inc.",
    },
    {
      label: "Country",
      value: "Atlantis",
    },
    {
      label: "Email",
      value: "emma.paletto@palette.inc",
    },
    {
      label: "Phone",
      value: "+0123456789",
    },
  ]

  $:firstName = details[0].value;
  $:lastName = details[1].value;
  $:email = details[4].value;
  let tagline = "Let me help you find the perfect palette!"

</script>

<div class="relative max-w-3xl mx-auto my-9 sm:rounded-2xl rounded-xl overflow-hidden bg-white shadow-md">
  <div class="relative h-52 sm:h-60 pt-5 flex justify-center">
    <div class="absolute top-0 w-full h-1/2 bg-slate-600"/>
    <div class="relative">
      <div class="avatar w-[188px] sm:w-[220px] h-full rounded-full
                  after:absolute after:w-full after:h-full after:top-0 after:rounded-full after:shadow-inner after:shadow-slate-600">
        <img class="rounded-full"
            src={profilePic}
            alt="Profile of Emma Paletto"/>
      </div>
       <div class="rounded-full p-2 absolute bottom-3 sm:bottom-2 right-6 h-10 w-10 bg-slate-600">
          <CameraIcon fill={"text-slate-100"}/>
      </div>
    </div>
  </div>

  <header class="w-full mt-2 flex flex-col justify-center text-center">
    <h2 class="font-semibold sm:text-lg text-md">{`${firstName} ${lastName}`}</h2>
    <p class="font-normal text-neutral-400 sm:text-sm text-xs">{email}</p>
    <p class="mt-4 italic text-neutral-700 sm:text-lg text-md">{`"${tagline}"`}</p>
  </header>

  <form class="sm:px-16 px-4 pb-16">
    <div class="mt-12 flex flex-wrap gap-4">
      {#each details as detail}
        <div class="md:mb-8 mb-3 flex-grow">
          <label>
            <p class="ml-2 sm:text-base text-sm font-light">{detail.label}</p>
            <input class="input input-bordered block mt-1 md:w-72 w-full sm:text-base text-xs"
                   type="text" bind:value={detail.value}/>
          </label>
          {#if detail.label === "Email"}
            <div class="mt-3 ml-1">
              <label class="flex items-center gap-2">
                <input type="checkbox" checked={true} class="checkbox"/>
                <span class="label-text text-xs">Display Publicly</span>
              </label>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <label>
      <p class="mt-2 ml-2 sm:text-base text-sm font-light">Tagline</p>
      <textarea class="textarea textarea-bordered block mt-1 w-full sm:text-base text-xs"
                rows={4} bind:value={tagline}/>
    </label>

    <div class="flex justify-center gap-1 mt-4">
      <button class="btn btn-primary btn-sm sm:btn-md">
        Accept
      </button>
      <button class="btn btn-sm sm:btn-md">
        Cancel
      </button>
    </div>
  </form>
</div>
