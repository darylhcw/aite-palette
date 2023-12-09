<script lang="ts">
  import ChatContactList from './ChatContactList.svelte';
  import ChatMessage from './ChatMessage.svelte';
  import { contacts, millieChat } from './ChatData';
  import { mediaQuery } from '$lib/stores/mediaQuery.svelte';

  let activeChat = {
    contact: contacts.millie,
    messages: millieChat,
  }

  let showMobileContactList = false;
  $: {
    if (showMobileContactList && $mediaQuery?.md) showMobileContactList = false;
  }

  function toggleShowMobileContactList() {
    showMobileContactList = !showMobileContactList;
  }

</script>

<div class="relative mx-auto max-w-4xl min-h-[50rem] max-h-[50rem] flex rounded-2xl overflow-hidden shadow-md">
  <div class="md:block hidden">
    <ChatContactList/>
  </div>
  {#if showMobileContactList }
    <div class="absolute w-full h-full z-20">
      <ChatContactList on:click={toggleShowMobileContactList}/>
    </div>
  {/if}
  <div class="grow flex flex-col items-center bg-white
              { showMobileContactList ? "opacity-20" : ""}">
    <header class="w-[96%] flex border-slate-300 border-b">
      <button class="md:hidden ml-2 text-neutral-600"
              on:click={toggleShowMobileContactList}>
        { showMobileContactList ? "" : ">>"}
      </button>
      <h3 class="grow text-center py-6 sm:text-2xl text-lg text-neutral-600">
        Chat with {activeChat.contact.name}
      </h3>
    </header>
    <!-- Outermost div here for the messages is for "padding" the scrollbar -->
    <div class="min-h-0 grow shrink p-2 pr-4">
      <div class="max-h-full overflow-y-auto thin-scroll">
        {#each millieChat as msg, index}
          <ChatMessage {...msg} left={(index & 1) !== 1}/>
        {/each}
      </div>
    </div>
    <div class="px-4 py-6 w-full">
      <textarea class="textarea w-full sm:text-lg text-base
                      bg-slate-100 placeholder-slate-400 border-slate-400
                       overflow-x-hidden resize-none"
                placeholder="Type a message..."
                rows={1}/>
    </div>
  </div>
</div>

<style>
  .thin-scroll::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #94a3b8;
  }
  .thin-scroll::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: #e2e8f0;
  }
  .thin-scroll::-webkit-scrollbar-corner {
    background-color: #e2e8f0;
  }
  .thin-scroll::-webkit-scrollbar {
    width: 0.375rem;
  }
  .thin-scroll {
    scrollbar-color: #e2e8f0 #94a3b8;
    scrollbar-width: thin;
  }
</style>
