<script lang="ts">
  let {
    hasBorder,
    extraClass,
    onClick,
  }: { hasBorder: boolean; extraClass?: string; onClick: () => void } =
    $props();

  const outerStyles = hasBorder
    ? "tracking-[-1px] text-[1.875rem] md:text-[3.063rem] md:tracking-[0.5-px] rounded-full "
    : "tracking-[-3.1px] text-[3.375rem] md:text-[6.75rem] md:tracking-[-7.3px] md:mt-[-7px] xl:mt-[-25px]";

  const innerStyles = hasBorder
    ? "py-0 px-[10px] bg-[#19151d] md:w-full md:shadow-md text-[30px] md:text-[2.438rem] xl:text-[2.5rem] tracking-[-2px] border-[#19151D] border-[2px] w-[198px]"
    : "xl:tracking-[-6.6px] ";

  const qStyles = hasBorder
    ? "text-[26px] md:text-[2rem] xl:text-[2.125rem]"
    : "text-[2.875rem] md:text-[5.938rem] xl:text-[6.25rem]";
</script>

<button
  class={`${outerStyles} ${extraClass} mt-[23px] md:w-fit mx-auto grid place-items-center font-['Monoton'] `}
  onclick={onClick}
>
  <div
    class={`${innerStyles} text-center rounded-full mx-auto cursor-pointer max-w-fit`}
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
  </div>
</button>

<style>
  div > span {
    text-shadow: 2px 2px 1px black;
  }
</style>
