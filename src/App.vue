<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
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

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.top-menu {
  width: 100%;
  height: 2rem;
  background-color: rgb(237, 189, 127);
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-menu-wrap {
  width: 50%;
  margin: 0 2rem;
  display: flex;
  justify-content: space-around;
}
</style>
