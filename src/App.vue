<template>
    <loading-page />
    <img class="avatar" src="https://avatars.githubusercontent.com/u/51108500?v=4" />
    <div class="top-menu">

        <div class="top-menu-wrap">
            <router-link to="/hello">
                欢迎
            </router-link>
            <router-link to="/plan">
                计划
            </router-link>
        </div>
    </div>
    <router-view />
</template>
<script>
import LoadingPage from './pages/LoadingPage/index.vue'
export default {
    components:{
        LoadingPage
    }
}
</script>
<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.top-menu {
  width: 100%;
  height: 2rem;
  background-color: rgb(237, 189, 127);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.top-menu-wrap {
  width: 50%;
  margin: 0 2rem;
  display: flex;
  justify-content: space-around;
}

.avatar{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
