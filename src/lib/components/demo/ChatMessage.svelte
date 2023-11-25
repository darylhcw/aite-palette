<script lang="ts">
  import type { Contact } from './ChatData';
  import DoubleCheckIcon from '$components/svg/DoubleCheck.svelte';

  export let sender: Contact;
  export let time: string;
  export let message: string;
  export let left = true;
</script>

<div class="chat mb-2 p-4 { left ? "chat-start" : "chat-end"}">
  <div class="chat-image avatar">
    <div class="sm:w-12 w-10 rounded-full">
      <img src={sender.src} alt={sender.name}>
    </div>
  </div>
  <div class="chat-header my-1 pl-2 flex flex-wrap items-baseline gap-x-1">
    <p class="sm:text-base text-xs text-neutral-700">{sender.name}</p>
    <time class="sm:text-xs text-[0.625rem] text-neutral-400">{time}</time>
    {#if !left }
    <div class="w-5 sm:w-6 self-center">
      <DoubleCheckIcon fill="text-neutral-400"/>
    </div>
    {/if}
  </div>
  <div class="chat-bubble
              { left
                ? "bg-slate-700 text-slate-100"
                : "bg-slate-300 text-slate-900"
              }
              sm:text-lg text-sm whitespace-pre-line">
    {message}
  </div>
</div>