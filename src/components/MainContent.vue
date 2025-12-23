<template>
  <div class="main-page">
    <h1
      id="main-title"
      class="animate__animated animate__jackInTheBox animate__delay-1s	1s"
    >
      [ rainer b. ]
    </h1>
    <div id="main-page-blurb">
      <p class="animate__animated animate__flipInX animate__delay-2s	2s">
        developer
      </p>
      <p class="animate__animated animate__flipInX animate__delay-3s	3s">
        music producer / audio engineer
        
      </p>
      <p class="animate__animated animate__flipInX animate__delay-4s	4s">
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
      src="../assets/rainer-main.png"
      alt="Side Profile of Rainer"
      class="animate__animated animate__fadeInLeftBig animate__delay-5s	5s"
    />
    <!-- <div class="animate__animated animate__fadeIn animate__delay-5s	5s">
      <h4 id="challenge">
        <a href="https://devtechno.netlify.app/" target="_blank"
          >VIEW my Dev.Techno Blog</a
        ><br /><br />
      </h4>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "main-page",
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
.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
  margin-bottom: 5vh;

  #main-title {
    font-family: "Source Code Pro", monospace;
    font-size: 24px;
    display: grid;
    align-items: center;
    justify-items: center;
    letter-spacing: 5px;
    margin-top: 10vh;
    text-align: center;
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
  #rainer-two {
    width: 75%;
    border-radius: 7%;
  }
  #main-page-blurb {
    line-height: 0px;
    margin-bottom: 5vh;
  }

  // TABLET
  @media only screen and (min-width: 670px) {
    margin-bottom: 10vh;

    #main-title {
      font-size: 42px;
    }
    p {
      font-size: 16px;
    }
    #rainer-two {
      width: 50%;
    }
  }

  // DESKTOP
  @media only screen and (min-width: 1020px) {
    margin-bottom: 15vh;

    #main-title {
      font-size: 50px;
    }
    #rainer-two {
      width: 35%;
      //margin-left: 37.5%;
    }
    p {
      font-size: 20px;
    }
  }
}

</style>
