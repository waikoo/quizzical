<script lang="ts">
  const { handler }: { handler: () => void } = $props();
</script>

<div class="w-full h-full relative isolate">
  <button
    class="text-[#FFF3D4] text-[1.313rem] md:text-[2.125rem] xl:text-[1.75rem] tracking-[0.4px] md:tracking-[0.7px] bg-[#344666] shadow-md rounded-full mx-auto h-[80%] block w-[80%] hover:bg-[#9DA0EA] border-0 hover:text-[#1E1830]"
    onclick={handler}
    >SETTINGS
  </button>
</div>

<style>
  button::before {
    content: "";
    position: absolute;
    left: 0;
    width: 82%;
    inset: 0;
    margin: auto;
    height: 130%;
    border-radius: 9999px;
    z-index: -1;
    background: linear-gradient(#637aaa, #283144);
    border: 2px solid #344666;
    box-shadow: 3px 3px 10 #766a00;
    margin-bottom: -4.5px;
  }

  button::after {
    content: "";
    position: absolute;
    width: 85%;
    inset: 0;
    margin: auto;
    height: 160%;
    border-radius: 9999px;
    z-index: -2;
    background: linear-gradient(#637aaa, #283144);
    box-shadow: 3px 3px 10px #16140a;
  }

  button {
    font-family: "Anton", sans-serif;
    box-shadow: 0px 0px 2px black;
  }
</style>
