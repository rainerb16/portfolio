<template>
  <div class="main-page">
    <h1
      id="main-title"
      class="animate__animated animate__jackInTheBox animate__delay-1s	1s"
    >
      [ rainer b. ]
    </h1>
    <div id="main-page-blurb">
      <p class="animate__animated animate__flipInX animate__delay-1s	1s">
        developer
      </p>
      <p class="animate__animated animate__flipInX animate__delay-2s	2s">
        music producer / audio engineer
        
      </p>
      <p class="animate__animated animate__flipInX animate__delay-3s	3s">
        audiophile
      </p>
      <h2
        id="creative"
        class="animate__animated animate__zoomInRight animate__delay-4s	4s"
      >
        creative
      </h2>
    </div>
     <div class="actions animate__animated animate__fadeInLeftBig animate__delay-5s	5s">
      <RouterLink to="/resume" class="btn btn-primary">
        View Resume
      </RouterLink>

      <a
        href="/Rainer_Brieger_Dev_Resume_1.2_2025.pdf"
        target="_blank"
        rel="noopener"
        class="btn btn-secondary"
      >
        Download PDF
      </a>
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
  width: 100%;
  margin-top: 5vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;

  #main-title {
    font-family: "Source Code Pro", monospace;
    font-size: 24px;
    letter-spacing: 5px;
    //margin-top: 10vh;
    text-align: center;
  }
  p {
    font-family: "Source Code Pro", monospace;
    font-size: 16px;
    margin-bottom: 5vh;
    text-align: center;
}

  #creative {
    color: maroon;
    font-family: "Source Code Pro", monospace;
    text-align: center;
  }
  #rainer-two {
    width: 75%;
    border-radius: 7%;
  }
  #main-page-blurb {
    line-height: 0px;
    margin-bottom: 5vh;
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 1.5rem;
    flex-wrap: wrap;
  }

/* Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border-radius: 10px;
    font-weight: 600;
    text-decoration: none;
    font-size: 0.95rem;
    margin-bottom: 4vh;
    transition: border-color 0.15s ease, background-color 0.15s ease;

    &-primary {
      border: 1px solid rgba(0, 0, 0, 0.45);
    }

    &-secondary {
      border: 1px solid rgba(0, 0, 0, 0.45);
      //opacity: 0.9;
    }

    &:hover {
      border-color: rgba(0, 0, 0, 1);
    }
  }

  // TABLET
  @media only screen and (min-width: 670px) {
    .main-page {
      margin-top: 5vh;
      margin-bottom: 5vh;
    }
    #main-title {
      font-size: 42px;
    }
    p {
      font-size: 18px;
    }
    #rainer-two {
      width: 50%;
    }
  }

  // DESKTOP
  @media only screen and (min-width: 1020px) {
    .main-page {
      margin-top: 10vh;
      margin-bottom: 15vh;
    }


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
