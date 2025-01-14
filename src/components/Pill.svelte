<script lang="ts">
  import type { Snippet } from "svelte";

  const {
    children,
    textColorClass,
    extraClass,
  }: { children: Snippet; textColorClass: string; extraClass: string } =
    $props();

  const borderRadius = "rounded-[40px]";
</script>

<div
  class={`${extraClass} py-[1px] px-[4px] bg-gradient-to-b from-[#2b2b2b] to-black shadow-[4px_4px_20px_black] ${borderRadius} mt-2 uppercase`}
>
  <p
    class={`${textColorClass} text-center bg-[#180f05] py-[10px] px-[21px] ${borderRadius} block relative md:text-[1.25rem] font-['Anton']`}
  >
    {@render children()}
  </p>
</div>
