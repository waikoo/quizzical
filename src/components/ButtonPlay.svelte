<script lang="ts">
  import type { Snippet } from "svelte";

  const { children, handler }: { children: Snippet; handler: () => void } =
    $props();
</script>

<div
  class="bg-gradient-to-b from-[#F66231] to-[#AF2C00] p-[5px] rounded-full shadow-[3px_3px_10px_#16140a]"
>
  <div class="bg-[#DCC600] rounded-full p-[4px]">
    <div class="shadow-[0_0_2px_#342905] rounded-full">
      <div
        class="bg-gradient-to-b from-[#E66E46] to-[#994F36] rounded-full p-[2px] shadow-[3px_3px_10px_#766a00]"
      >
        <button
          class="font-['Anton'] text-[#AD2B00] text-[1.313rem] md:text-[2.125rem] xl:text-[1.75rem] tracking-[0.4px] bg-[#FFF1D4] rounded-full mx-auto block w-full hover:bg-[#F55C28] hover:text-[#3F1001] uppercase transition-colors"
          onclick={handler}
          >{@render children()}
        </button>
      </div>
    </div>
  </div>
</div>
