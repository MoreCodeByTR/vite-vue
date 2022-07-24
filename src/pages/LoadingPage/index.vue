<template>
  <div v-if="visible" class="loading-container">
    <div class="tip-text">{{ title }}</div>
    <div class="loader">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>
<script>
export default {
  name:'LoadingPage',
  data:() => {
    return {
      visible:true,
      title:'加载中...'
    }
  },
  mounted:function() {
    let vm = this
    let img = new Image()
    img.src = 'https://avatars.githubusercontent.com/u/51108500?v=4'
    img.onload = function() {
      setTimeout(() => {
        vm.visible = false
      }, 1000)
    }
  }
}
</script>
<style scoped>
.loading-container{
    position: fixed;
    top: 0;
    z-index: 9999;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
}

.tip-text{
    color: #ccc;
    position: fixed;
    font-size: 24px;
    width: 100%;
    top: 40vh;
    opacity: 0.3;
    text-align: center;
    animation: opacity 2s infinite;
}

.loader {
    position: absolute;
    top: 50%;
    left: 40%;
    margin-left: 10%;
    transform: translate3d(-50%, -50%, 0);
}

.dot {
    width: 24px;
    height: 24px;
    background: #3ac;
    border-radius: 100%;
    display: inline-block;
    animation: slide 2s infinite;
}

.dot:nth-child(1) {
    animation-delay: 0.1s;
    background: #32aacc;
}

.dot:nth-child(2) {
    animation-delay: 0.2s;
    background: #64aacc;
}

.dot:nth-child(3) {
    animation-delay: 0.3s;
    background: #96aacc;
}

.dot:nth-child(4) {
    animation-delay: 0.4s;
    background: #c8aacc;
}

.dot:nth-child(5) {
    animation-delay: 0.5s;
    background: #faaacc;
}

@keyframes slide {
0% {
    transform: scale(1);
}
50% {
    opacity: 0.3;
    transform: scale(2);
}
100% {
    transform: scale(1);
}
}

@keyframes opacity {
0% {
    opacity: 0.3;
    transform: scale(1);
}
50% {
    opacity: 1;
    transform: scale(1.5);
}
100% {
    opacity: 0.3;
    transform: scale(1);
}
}
</style>