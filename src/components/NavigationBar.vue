<template>
  <div>
    <div id="nav" class="animate__animated animate__fadeInDownBig">
      <router-link to="/" class="nav-link"><h1 id="r-title">R</h1></router-link>
      <span></span>
      <router-link to="/" class="nav-link">[home]</router-link>
      <router-link to="/about" class="nav-link">[about]</router-link>
      <router-link to="/portfolio" class="nav-link">[projects]</router-link>
      <a
        href="https://www.klvsaudio.co/"
        target="_blank"
        rel="noreferrer"
        class="nav-link"
        >[KLVS audio]</a
      >
      <router-link to="/contact" class="nav-link">[contact]</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation-bar",
};
</script>

<style lang="scss" scoped>
//MOBILE
a:link {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
a:visited {
  color: black;
}
#r-title {
  font-family: "Abril Fatface", cursive;
  font-size: 34px;
  margin: 0 auto;
}
#nav {
  display: grid;
  column-gap: 7px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  align-items: center;
  justify-items: center;
  min-height: 2vh;
  color: black;
  font-family: "Source Code Pro", monospace;
  font-size: 14px;
}
// TABLET
@media only screen and (min-width: 768px) {
  #nav {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr 1fr;
    font-size: 20px;
  }
  #r-title {
    font-family: "Abril Fatface", cursive;
    font-size: 46px;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #nav {
    column-gap: normal;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr 1fr;
    font-size: 18px;
  }
  #r-title {
    font-family: "Abril Fatface", cursive;
    font-size: 56px;
  }
  .nav-link {
    display: inline-block;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    font-size: 18px;
    padding: 4px;
  }
  .nav-link:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 50%;
    right: 50%;
    bottom: 0;
    background: maroon;
    height: 3px;
    transition-property: left, right;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  .nav-link:hover:before,
  .nav-link:focus:before,
  .nav-link:active:before {
    left: 0;
    right: 0;
  }
}
</style>
