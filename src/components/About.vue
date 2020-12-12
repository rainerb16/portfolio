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
      class="animate__animated animate__fadeIn animate__delay-2s	2s"
    >
      <div id="resume">
        <img id="cv" src="../assets/cv.png" alt="Download Resume Icon" />
        <h4>
          <a
            href="https://drive.google.com/file/d/1is_Wblbc0lnQ8og60Qms779_oott4rOp/view?usp=sharing"
            target="_blank"
            download="Rainer Brieger Resume"
            >Download PDF of my Resume</a
          >
        </h4>
      </div>
      😄 Pronouns: They/Them<br /><br />
      Hey There! 👋 <br /><br />

      My name is Rainer and I'm a Junior Developer from Calgary, Canada. I am a driven, 
      passionate, and curious learner with a willingness to learn. There is something about 
      negative space that is eye catching as I am very much about minimalism. I'm a music producer, 
      DJ and audio engineer, I also co-own an electronic music label called OBSKUR MUSIC. We use 
      this platform to showcase music from marginalized artists looking to be heard.<br /><br />

      Things I do with my spare time include music production, music mastering,
      camping, fishing, and playing old school retro 2d games.<br /><br />

      <h4
        id="tech-stack"
        class="animate__animated animate__fadeIn animate__delay-2s	2s"
      >
        <u>Technical Skills</u>
      </h4>
      <div id="tech-list">
        <p>- HTML5</p>
        <p>- CSS3</p>
        <p>- Sass</p>
        <p>- JavaScript</p>
        <p>- Vue</p>
        <p>- p5.js</p>
        <p>- Python</p>
        <p>- Flask</p>
        <p>- Google Cloud Platform</p>
        <p>- Apache</p>
        <p>- MariaDB</p>
        <p>- DBeaver</p>
        <p>- Figma</p>
        <p>- Responsive Web Design</p>
      </div>
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
#tech-stack {
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 3vh;
  padding: 10px;
}
#tech-list {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 3fr 3fr;
  text-align: left;
  border: 1px solid black;
}
#resume {
  display: grid;
  align-items: center;
  justify-items: center;
}
#cv {
  width: 7%;
}

// TABLET
@media only screen and (min-width: 670px) {
  #me-photo {
    width: 30%;
  }
  #about-me-container {
    font-size: 16px;
  }
  #tech-list {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 3fr 3fr 3fr;
    text-align: center;
    border: 1px solid black;
    padding: 10px;
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
  #tech-list {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 3fr 3fr 3fr 3fr;
    text-align: center;
    border: 1px solid black;
    padding: 10px;
  }
}
</style>
