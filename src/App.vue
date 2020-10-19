<template>
  <div id="main">
    <navigation-bar />
    <router-view />
    <footer-bar />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import FooterBar from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    NavigationBar,
    FooterBar
  }
};
</script>

<style lang="scss">
body {
  background-color: white;
  font-family: "Source Code Pro", monospace;
}
html {
  scroll-behavior: smooth;
}
</style>
