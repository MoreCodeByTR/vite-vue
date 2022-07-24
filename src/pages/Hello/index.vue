<template>
  <div>
    <p>This is a hello page</p>
    <router-link to="/hello/china">
      中文
    </router-link>|
    <router-link to="/hello/english">
      英文
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Hello'
}
</script>

<style></style>
