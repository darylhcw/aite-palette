<script lang="ts">
  import DoubleCheckIcon from '$components/svg/DoubleCheck.svelte';
  import SearchBar from '$components/demo/SearchBar.svelte';
  import { chatList } from './ChatData';
</script>

<aside class="sm:w-[19rem] max-w-[19rem] w-full h-full bg-palette-800
            sm:rounded-none rounded-tr-2xl rounded-br-2xl">
  <div class="w-full py-5 md:px-5 px-2 flex gap-x-3">
    <button class="md:hidden text-base text-slate-100" on:click>
      { "<<" }
    </button>
    <SearchBar />
  </div>
  <menu class="flex flex-col">
    {#each chatList as chat, index}
      <li class="p-3 flex gap-x-3 items-center { index === 0 ? "bg-palette-600 border-t-2" : ""} border-b-2 border-palette-500">
        <div class=" avatar sm:w-12 w-10 rounded-full">
          <img class="rounded-full" src={chat.contact.src} alt="profile of {chat.contact.name}"/>
        </div>
        <div class="grow basis-0 min-w-0">
          <h4 class="text-base text-palette-100 ellipsis-line">{chat.contact.name}</h4>
          <div class="flex gap-x-1">
            {#if chat.lastSenderIsUs}
              <div class="w-5 h-5">
                <DoubleCheckIcon fill="text-palette-300"/>
              </div>
            {/if}
            <p class="text-sm text-palette-100 ellipsis-line">
              {chat.lastMessage}
            </p>
          </div>
        </div>
        <time class="text-xs text-palette-300">
          {chat.time}
        </time>
      </li>
    {/each}
  </menu>
</aside>