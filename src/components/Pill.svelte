<script lang="ts">
  import type { Snippet } from "svelte";

  const {
    children,
    textColorClass,
  }: { children: Snippet; textColorClass: string } = $props();
</script>

<div
  class="py-[1px] px-[3px] bg-gradient-to-b from-[#2b2b2b] to-black shadow-[4px_4px_20px_black] rounded-[40px] mt-2"
>
  <p
    class={`${textColorClass} text-center bg-[#180f05] rounded-[40px] p-2 block relative md:text-[1.25rem] font-['Anton']`}
  >
    {@render children()}
  </p>
</div>
