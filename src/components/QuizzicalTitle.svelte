<script lang="ts">
  let { hasBorder }: { hasBorder: boolean } = $props();

  const divStyles = hasBorder
    ? "tracking-[-1px] text-[1.875rem] md:text-[3.063rem] md:tracking-[0.5-px] rounded-full "
    : "tracking-[-3.1px] text-[3.375rem] md:text-[6.75rem] md:tracking-[-7.3px] md:mt-[-7px] xl:mt-[-25px]";
  const qStyles = hasBorder
    ? "text-[1.625rem] md:text-[2rem] xl:text-[2.125rem]"
    : "text-[2.875rem] md:text-[5.938rem] xl:text-[6.25rem]";
  const aStyles = hasBorder
    ? "py-0 px-[10px] bg-[#19151d] md:w-full md:shadow-md md:text-[2.438rem] xl:text-[2.5rem] tracking-[-2px] border-[#19151D] border-[2px]"
    : "xl:tracking-[-6.6px] ";
</script>

<div class={`${divStyles} md:w-fit md:mx-auto grid place-items-center`}>
  <a
    class={`${aStyles} font-['Monoton'] block text-center rounded-full mx-auto cursor-pointer max-w-fit`}
    href="/"
  >
    <span class={`text-[#FFA13D] ${qStyles}`}>Q</span>
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
</style>
