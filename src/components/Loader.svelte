<span class="loader"></span>

<style>
  .loader {
    border: 24px solid;
    border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25)
      rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: animloader 1s linear infinite;
  }

  @keyframes animloader {
    0% {
      border-color: #f56332 #344666 #fbe300 #ef88b5;
    }
    33% {
      border-color: #ef88b5 #f56332 #344666 #fbe300;
    }
    66% {
      border-color: #fbe300 #ef88b5 #f56332 #344666;
    }
    100% {
      border-color: #344666 #fbe300 #ef88b5 #f56332;
    }
  }
</style>
