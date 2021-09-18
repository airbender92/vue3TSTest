<!--
 * @Author: wangyunbo
 * @Date: 2021-09-17 09:06:34
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-18 15:28:37
 * @FilePath: \my-vue3-project\src\App.vue
 * @Description: file content
-->
<template>
  <div id="app">
    <h2>My Vue 3 Project</h2>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h2 {
    margin: 0;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
