<template>
  <div id="portfolio-page">
    <h2
      id="sub-title"
      class="animate__animated animate__fadeIn animate__delay-1s	1s"
    >
      [portfolio]
    </h2>
    <h4 id="github-link" class="animate__animated animate__fadeIn animate__delay-2s	2s"><a href="https://github.com/rainerb16">view my GitHub for all projects</a></h4>
    <div
      id="projects-grid"
      class="animate__animated animate__fadeIn animate__delay-2s	2s"
    >
      <div class="project-item">
        <h2>NERDR</h2>
        <img src="../assets/nerdr-thumbnail.png" alt="Thumbnail of NERDR" />
        <h4>NERDR - Front-End of a Simple Twitter like platform with VUE.js</h4>
        <p>
          This is part one of a project for InnoTech College. The idea is
          showcase our <u>Vue</u> skills by coding the front-end of a Twitter
          like platform. Part two will consist of the back-end. Style wise, I
          wanted to curate this platform to fit more of my personality rather
          than just a Twitter clone.<br /><br />
          NERDR is mobile and desktop compatible.
        </p>
        <div id="project-links">
          <p id="link">
            <a href="https://nerdr.ml/">LIVE SITE</a>
          </p>
          <p id="link">
            <a href="https://github.com/rainerb16/Vue-Tweeter">VIEW CODE</a>
          </p>
        </div>
      </div>
      <div class="project-item">
        <h2>POKE8BIT</h2>
        <img
          src="../assets/poke8bit-thumbnail.png"
          alt="Thumbnail of POKE8BIT"
        />
        <h4>POKE8BIT - Classic Pokemon Battle click game in 8 BIT</h4>
        <p>
          Classic Pokemon Battle Simulation with JavaScript, HTML, Sass.<br /><br />
          POKE8BIT is not mobile compatible.
        </p>
        <div id="project-links">
          <p id="link">
            <a href="www.poke8bit.ml">LIVE SITE</a>
          </p>
          <p id="link">
            <a href="https://github.com/rainerb16/w10c-classic-pokemon-battle"
              >VIEW CODE</a
            >
          </p>
        </div>
      </div>
      <div class="project-item">
        <h2>Rock Paper Scissors Spock Lizard</h2>
        <img
          src="../assets/rpsls-thumbnail.png"
          alt="Thumbnail of Rock Paper Scissors Spock Lizard"
        />
        <h4>
          Rock Paper Scissors Spock Lizard - Geek Version of the original
          handgame
        </h4>
        <p>
          Demonstrating skills with Vue.js, Vue X and Router. Rock Paper
          Scissors Spock Lizard is the geek version of the original hand
          game.<br /><br />
          Rock Paper Scissors Spock Lizard is not mobile compatible.
        </p>
        <div id="project-link-single">
          <p id="link">
            <a href="https://github.com/rainerb16/W14B-Vue-Rock-Paper-Scissors"
              >VIEW CODE</a
            >
          </p>
        </div>
      </div>
      <div class="project-item">
        <h2>Kanye REST Quote Generator</h2>
        <img
          src="../assets/kanye-thumbnail.png"
          alt="Thumbnail of KANYE REST"
        />
        <h4>Kanye REST - Quote Generator (using an API)</h4>
        <p>
          Random Kanye West quote generator coded with JavaScript, AJAX & JSON;
          utilizing a Kanye Rest API: https://kanye.rest/<br /><br />
          Kanye REST is mobile and desktop compatible.
        </p>
        <div id="project-links">
          <p id="link">
            <a href="https://kanyerest.ml/">LIVE SITE</a>
          </p>
          <p id="link">
            <a href="https://github.com/rainerb16/kanye-rest-api-generator"
              >VIEW CODE</a
            >
          </p>
        </div>
      </div>
      <div class="project-item">
        <h2>RETRO PONG</h2>
        <img src="../assets/pong-thumbnail.png" alt="Thumbnail of RETRO PONG" />
        <h4>RETRO PONG - Atari game clone with p5.js</h4>
        <p>
          Classic Atari Pong Game coded for fun! Coded in p5.js! This is not
          available on mobile (yet). I will need to integrate touch for screen
          instead of key-up and key-down functions. Would like to customize the
          game more by adding levels and obstacles for the player.<br /><br /><br />
          1. Use the up and down arrows to control your paddle.<br /><br />
          2. Have fun!<br /><br />
          RETRO PONG is not mobile compatible.
        </p>
        <div id="project-links">
          <p id="link">
            <a href="https://pong-retrostyle.ml/">LIVE SITE</a>
          </p>
          <p id="link">
            <a href="https://github.com/rainerb16/Retro-Pong-Game-p5js"
              >VIEW CODE</a
            >
          </p>
        </div>
      </div>
      <div class="project-item">
        <h2>OKOTOKS PIZZA</h2>
        <img
          src="../assets/opp-thumbnail.png"
          alt="Thumbnail of the OKOTOKS PIZZA Website"
        />
        <h4>OKOTOKS PIZZA project - Website for local pizza shop</h4>
        <p>
          Okotoks Pizza is the final project of InnoTech College's HTML and
          CSS/Sass units. This showcase my use of HTML, SCSS, SEO analtyics
          grids and simple animations.<br /><br />
          OKOTOKS PIZZA's website is mobile and desktop compatible.
        </p>
        <div id="project-links">
          <p id="link">
            <a href="https://straightouttaokotoks.ml">LIVE SITE</a>
          </p>
          <p id="link">
            <a href="https://github.com/rainerb16/Okotoks-Pizza-Project"
              >VIEW CODE</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "portfolio-content"
};
</script>

<style lang="scss" scoped>
// MOBILE
#portfolio-page {
  display: grid;
  align-items: center;
  justify-items: center;
}
#sub-title {
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
#projects-grid {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 5fr;
  row-gap: 10px;
  margin: 3vh 3vh 0vh 3vh;
}
h2,
h4 {
  text-align: center;
  margin: 5px;
}
.project-item {
  border: 1px solid black;
  width: 100%;
  object-fit: cover;
  grid-template-columns: 1fr;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 2vh;
}
img {
  width: 90%;
}
p {
  font-size: 14px;
  text-align: justify;
  margin: 10px;
}
span {
  text-align: center;
}
#project-links {
  margin-bottom: 10px;
  grid-template-columns: 1fr 1fr;
  display: grid;
  align-items: center;
  justify-items: center;
}
#link {
  border: 1px solid black;
  padding: 7px;
  box-shadow: 3px 0px 7px darkgray;
  cursor: pointer;
}
a:link {
  color: black;
  cursor: pointer;
}
a:visited {
  color: black;
}

// TABLET
@media only screen and (min-width: 768px) {
  #sub-title {
    font-size: 24px;
  }
  #projects-grid {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 3fr 3fr;
    row-gap: 30px;
    margin-top: 3vh;
    column-gap: 30px;
  }
  .project-item {
    height: 100%;
  }
}
// DESKTOP
@media only screen and (min-width: 1020px) {
  #sub-title {
    font-size: 30px;
  }
  #github-link {
    cursor: pointer;
  }
  #projects-grid {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 2fr 2fr 2fr;
    row-gap: 50px;
    margin-top: 3vh;
    column-gap: 50px;
  }
  #link {
    transform: perspective(1px) translateZ(0);
  }
  #link:hover {
    box-shadow: 2px 4px 4px black;
  }
}
</style>
