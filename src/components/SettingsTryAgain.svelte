<script lang="ts">
  import IconX from "./IconX.svelte";

  let {
    closePopup,
  }: {
    closePopup: () => void;
  } = $props();

  const message = `Hmm… it looks like there are no questions for this combination. Adjust your settings and try again.`;

  const borderRadius = "rounded-[30px]";
</script>

<section
  class="fixed inset-0 grid place-items-center bg-black/60 z-[1] p-[19px] sm:p-[30px]"
>
  <article
    class={`bg-gradient-to-b from-[#373636] to-black p-[2px] sm:max-w-[621px] ${borderRadius}`}
  >
    <div
      class={`bg-[#100A03] ${borderRadius} font-['Agdasima'] text-[#E46136] text-[25px] sm:text-[28px] xl:text-[25px] text-right p-[10px] sm:pb-[60px] sm:pt-[10px] xl:pb-[54px] xl:pt-[74px] relative`}
    >
      <button
        class="bg-gradient-to-b from-[#2B2B2B] to-[black] p-[2px] rounded-full ml-auto shadow-[4px_4px_20px_#000] xl:hidden"
        onclick={closePopup}
      >
        <div class="inline-block bg-[#180F05] p-3 rounded-full">
          <IconX />
        </div>
      </button>

      <button
        onclick={closePopup}
        class="hidden xl:block ml-auto absolute top-5 right-5"
      >
        <IconX />
      </button>

      <p
        class="text-center px-[30px] xl:w-[80%] sm:mx-auto mt-[-20px] leading-[30px] sm:leading-[34px] xl:leading-[30px]"
      >
        {message}
      </p>

      <div class="pb-[30px]">
        <div
          class="w-full rounded-full bg-gradient-to-b from-[#fce941] to-[black] p-[2px] mt-[30px] sm:mt-[50px] xl:mt-[40px] max-w-[213px] sm:max-w-[237px] xl:w-max-content sm:whitespace-nowrap mx-auto"
        >
          <button
            class={`font-["Anton"] font-400 bg-[#E3BF00] rounded-full w-full block text-[#180F05] px-10 py-1 mx-auto text-[16px] sm:text-[23px] xl:text-[20px]`}
            onclick={closePopup}
          >
            BACK TO SETTINGS
          </button>
        </div>
      </div>
    </div>
  </article>
</section>
