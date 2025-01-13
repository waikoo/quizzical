<script lang="ts">
  import decodeHtmlEntities from "../utils/decodeHtmlEntities";

  const { question }: { question: string } = $props();
</script>

<div
  class="bg-gradient-to-b from-[#2b2b2b] to-black rounded-[40px] shadow-[4px_3px_10px_#2f2f2f]"
>
  <p
    class="bg-[#180F05] p-8 px-10 xl:p-[3rem] rounded-full text-center font-['Akshar'] text-[1.063rem] md:text-[1.438rem]"
  >
    {decodeHtmlEntities(question)}
  </p>
</div>
