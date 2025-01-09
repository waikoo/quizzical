<script lang="ts">
  let { hasBorder }: { hasBorder: boolean } = $props();
  const borderStyles = hasBorder
    ? "tracking-[-1px] text-[1.875rem]"
    : "tracking-[-3.1px] text-[3.375rem]";
  const borderText = hasBorder ? "text-[1.625rem]" : "text-[2.875rem]";
  const borderBg = hasBorder ? "p-2 bg-[#19151d] w-[70%] shadow-md" : "";
</script>

<div class={`${borderStyles}`}>
  <a
    class={`block ${borderBg} text-center rounded-full mx-auto cursor-pointer`}
    href="/"
  >
    <span class={`text-[#FFA13D] ${borderText}`}>Q</span>
    <span class="text-[#2775E9]">u</span>
    <span class="text-[#FF82E6]">i</span>
    <span class="text-[#FCFF46]">z</span>
    <span class="text-[#D2BDFF]">z</span>
    <span class="text-[#79C19B]">i</span>
    <span class="text-[#FF7700]">c</span>
    <span class="text-[#779DFF]">a</span>
    <span class="text-[#CFDD00]">l</span>
  </a>
</div>

<style>
  a > span {
    text-shadow: 2px 2px 1px black;
  }

  a {
    font-family: "Monoton", sans-serif;
    /* box-shadow: 1px 1px 1px black; */
  }
</style>
