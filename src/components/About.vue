<template>
  <div class="main-page">
    <h2
      id="sub-title"
      class="animate__animated animate__fadeIn animate__delay-1s	1s"
    >
      [about me]
    </h2>
    <div
      id="main-content-container"
      class="animate__animated animate__fadeIn animate__delay-2s	2s"
    >
      <img
        id="me-photo"
        src="../assets/rainer.jpg"
        alt="A portfolio photo of Rainer B."
      />
    </div>

    <div
      id="about-me-container"
      class="animate__animated animate__fadeIn animate__delay-3s	3s"
    >
      <h4 id="resume"><a href="https://drive.google.com/file/d/1Oj5LULkCKd92yFDNCMrPtOzKpBUKtf9Z/view?usp=sharing" target="_blank" download="Rainer Brieger Resume">Download PDF my Resume</a></h4>
      😄 Pronouns: They/Them<br /><br />
      Hey There! 👋 <br /><br />

      My name is Rainer and I am a Full Stack Development Student in Calgary,
      Canada. I'm currently enrolled in a Full Stack Development Diploma
      program, graduating in December of 2020. I am a driven, passionate, and
      curious learner with a willingness to learn. I'm looking forward to
      entering the tech industry and seeking an internship or junior towards the
      end of my studies.<br /><br />

      Things I do with my spare time include music production, music mastering,
      camping, fishing, and playing old school retro 2d games.<br /><br />

      🔭 I’m currently working on: My Full Stack Dev program! I'd like to learn
      C# in the future and contribute to bigger open source projects.<br /><br />
      💻 I have experience with: HTML5, CSS, Sass/SCSS, JavaScript, Vue.js,
      p5.js, Python, Google Cloud Technology, Git, Asana and Figma.
    </div>
  </div>
</template>

<script>
export default {
  name: "about-page",
  components: {}
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
#resume {
  margin-bottom: 5vh;
}
#main-content-container {
  display: grid;
  align-items: center;
  justify-items: center;
}
#me-photo {
  width: 45%;
  border-radius: 50%;
  box-shadow: 1px 0px 8px black;
  margin: 3vh;
}
#sub-title {
  font-family: "Source Code Pro", monospace;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 5vh;
}
#main-page-blurb {
  line-height: 0px;
}
#about-me-container {
  font-family: "Source Code Pro", monospace;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 5vw;
  font-size: 14px;
  text-align: justify;
}

// TABLET
@media only screen and (min-width: 670px) {
  #me-photo {
    width: 30%;
  }
  #about-me-container {
    font-size: 16px;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #me-photo {
    width: 15%;
  }
  #about-me-container {
    width: 60%;
    margin-left: 20%;
  }
}
</style>
