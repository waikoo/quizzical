<script lang="ts">
  const { handler }: { handler: () => void } = $props();
</script>

<div class="bg-gradient-to-b from-[#637AAA] to-[#283144] rounded-full p-[5px]">
  <div class="bg-[#344666] rounded-full p-[3px]">
    <div class="shadow-[3px_3px_10px_#16140A] rounded-full">
      <div
        class="bg-gradient-to-b from-[#637aaa] to-[#283144] p-[2px] rounded-full"
      >
        <button
          class="font-['Anton'] text-[#FFF3D4] text-[1.313rem] md:text-[2.125rem] xl:text-[1.75rem] tracking-[0.4px] md:tracking-[0.7px] bg-[#344666] rounded-full mx-auto block w-full hover:bg-[#9DA0EA] border-0 hover:text-[#1E1830] transition-colors"
          onclick={handler}
          >SETTINGS
        </button>
      </div>
    </div>
  </div>
</div>
