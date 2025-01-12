<script lang="ts">
  import type { Snippet } from "svelte";

  const { children, handler }: { children: Snippet; handler: () => void } =
    $props();
</script>

<div class="bg-gradient-to-b from-[#3E3E3E] to-[#211D03] rounded-full p-[5px]">
  <div class="bg-[#FFF1D4] rounded-full p-[4px]">
    <div class="shadow-[0_0_2px_#342905] rounded-full">
      <div
        class="rounded-full bg-gradient-to-b from-[#E66E46] to-[#994F36] p-[2px] shadow-[3px_3px_10px_#766A00]"
      >
        <button
          class="font-['Anton'] text-[1.313rem] md:text-[2.125rem] xl:text-[1.75rem] tracking-[0.4px] bg-[#180F05] hover:bg-[#F2E01F] hover:text-[#3A1608] text-[#FFF1D4] uppercase rounded-full w-full mx-auto block transition-colors"
          onclick={handler}
        >
          {@render children()}
        </button>
      </div>
    </div>
  </div>
</div>
