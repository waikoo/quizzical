<script lang="ts">
  import decodeHtmlEntities from "../utils/decodeHtmlEntities";

  const { question }: { question: string } = $props();
  const borderRadius = "rounded-[25px] md:rounded-full";
</script>

<div
  class={`${borderRadius} bg-gradient-to-b from-[#2b2b2b] to-black shadow-[4px_3px_10px_#2f2f2f]`}
>
  <p
    class={`${borderRadius} bg-[#180F05] p-8 px-10 xl:p-[3rem] md:min-h-[157px] text-center font-['Akshar'] text-[1.063rem] md:text-[1.438rem] flex justify-center items-center`}
  >
    {decodeHtmlEntities(question)}
  </p>
</div>
