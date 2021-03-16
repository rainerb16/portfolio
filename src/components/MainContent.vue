<template>
  <div class="main-page">
    <h1
      id="main-title"
      class="animate__animated animate__jackInTheBox animate__delay-1s	1s"
    >
      rainer b.
    </h1>
    <div id="main-page-blurb">
      <p class="animate__animated animate__flipInX animate__delay-2s	2s">
        developer
      </p>
      <p class="animate__animated animate__flipInX animate__delay-3s	3s">
        music producer
      </p>
      <p class="animate__animated animate__flipInX animate__delay-4s	4s">
        record label owner
      </p>
      <p class="animate__animated animate__flipInX animate__delay-5s	5s">
        audiophile
      </p>
      <h2
        id="creative"
        class="animate__animated animate__zoomInRight animate__delay-5s	5s"
      >
        creative
      </h2>
    </div>
    <img
      id="rainer-two"
      src="../assets/rainer2.jpg"
      alt="Side Profile of Rainer"
      class="animate__animated animate__fadeInLeftBig animate__delay-5s	5s"
    />
    <div class="animate__animated animate__fadeIn animate__delay-5s	5s">
      <h4 id="challenge">
        <a href="https://devtechno.netlify.app/" target="_blank"
          >VIEW my Dev.Techno Blog</a
        ><br /><br />
      </h4>
    </div>
  </div>
</template>

<script>

export default {
  name: "main-page"
};
</script>

<style lang="scss" scoped>
// MOBILE
a:link {
  color: black;
}
a:visited {
  color: black;
}
a:hover {
  color: maroon;
}

#main-title {
  font-family: "Source Code Pro", monospace;
  font-size: 36px;
  display: grid;
  align-items: center;
  justify-items: center;
  letter-spacing: 5px;
  margin-top: 10vh;
}
p {
  font-family: "Source Code Pro", monospace;
  font-size: 14px;
  display: grid;
  align-items: center;
  justify-items: center;
  margin-bottom: 5vh;
}
#creative {
  color: maroon;
  font-family: "Source Code Pro", monospace;
  display: grid;
  align-items: center;
  justify-items: center;
}
#main-page-blurb {
  line-height: 0px;
  margin-bottom: 10vh;
}
#challenge {
  font-family: "Source Code Pro", monospace;
  text-align: center;
}
#rainer-two {
  width: 75%;
  margin-left: 12.5%;
  border-radius: 7%;
}

// TABLET
@media only screen and (min-width: 670px) {
  #main-title {
    font-size: 42px;
  }
  #rainer-two {
    width: 50%;
    margin-left: 25%;
  }
  p {
    font-size: 16px;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #main-title {
    font-size: 50px;
  }
  #rainer-two {
    width: 25%;
    margin-left: 37.5%;
  }
  p {
    font-size: 20px;
  }
}
</style>
