<script lang="ts"></script>

<div class="w-full h-full relative">
  <button
    class="text-[#AD2B00] bg-[#FFF1D4] shadow-md rounded-full mx-auto h-[80%] border-2 border-[#E66E46] block w-[80%] hover:bg-[#F55C28] hover:text-[#3F1001]"
    >PLAY
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
    height: 120%;
    border-radius: 9999px;
    z-index: -1;
    background: linear-gradient(#e66e46, #994f36);
    border: 2px solid #dcc600;
    box-shadow: 3px 3px 10 #766a00;
  }

  button::after {
    content: "";
    position: absolute;
    width: 85%;
    inset: 0;
    margin: auto;
    height: 150%;
    border-radius: 9999px;
    z-index: -2;
    background: linear-gradient(#f66231, #af2c00);
    box-shadow: 3px 3px 10px #16140a;
  }

  button {
    font-family: "Anton", sans-serif;
    box-shadow: 0px 0px 2px #342905;
  }
</style>
