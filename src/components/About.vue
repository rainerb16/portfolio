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
      class="animate__animated animate__fadeIn animate__delay-1s	1s"
    >
      <img
        id="me-photo"
        src="../assets/rainer-setup.jpeg"
        alt="A portfolio photo of Rainer B."
      />

      <a class="resume" href="https://drive.google.com/file/d/1wTtmAWwmJxwARFOuVNVC2TL2a7OZL2fp/view?usp=sharing" target="_blank">Download my resume 📝 </a>
    </div>

    <div
      id="about-me-container"
      class="animate__animated animate__fadeIn animate__delay-1s	1s"
    >
      😄 Pronouns: They/Them<br /><br />
      Hey There! 👋 <br /><br />

      My name is Rainer and I'm a Developer from Calgary, Canada. I am a driven, 
      passionate, and curious learner with a willingness to learn. I am obsessed with minimalism.
      I've been diving deep into the Blockchain and Metaverse(s) hoping to contribute as a developer soon.
      I'm also a music producer, DJ and audio engineer. I've produced both music NFTs and electronic music that 
      has released worldwide.<br /><br />

      Things I do with my spare time include electronic music production 🎹 🎛️ 🎶 , coding blockchain projects on the side 👾 , and spending time with my amazing partner 💖 .
      <br /><br />

      I am currently 🤓 👨‍💻 : Learning Blockchain Development with Solidity and Smart Contracts, Animation / coding games and digital products for the Metaverse.

      <h4
        id="tech-stack"
        class="animate__animated animate__fadeIn animate__delay-1s	1s"
      >
        <u>Technical Skills</u>
      </h4>
      <div id="tech-list">
        <p>- HTML5</p>
        <p>- CSS3</p>
        <p>- Sass</p>
        <p>- JavaScript</p>
        <p>- Solidity</p>
        <p>- React</p>
        <p>- NextJS (Basic Level) </p>
        <p>- Contentful</p>
        <p>- p5.js (Basic Level) </p>
        <p>- Python</p>
        <p>- Google Cloud Platform (Basic Level) </p>
        <p>- MariaDB (Basic Level) </p>
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
#main-content-container {
  display: grid;
  align-items: center;
  justify-items: center;
}
#me-photo {
  width: 50%;
  //border-radius: 50%;
  box-shadow: 1px 0px 8px black;
  margin: 5vh;
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
  grid-gap: 7px;
  column-gap: 7px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 3fr 3fr;
  text-align: center;
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
    grid-template-columns: 2fr 2fr;
    text-align: center;
    border: 1px solid black;
    padding: 10px;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #me-photo {
    width: 23%;
  }
  #about-me-container {
    width: 60%;
    margin-left: 20%;
  }
  #tech-list {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 2fr 2fr 2fr 3fr;
    text-align: center;
    border: 1px solid black;
    padding: 10px;
  }
}
</style>
