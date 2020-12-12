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
        <h2>LOOP MACHINA - Techno Sequencer</h2>
        <img src="../assets/loop-thumbnail.png" alt="Thumbnail of LOOP MACHINA" />
        <h4>LOOP MACHINA - Techno Sequencer with p5.js, Sass</h4>
        <p>
          MVP project for InnoTech College. I decide to code a simple drum machine of my favorite genre. There are 9 tracks with their own dedicated sounds. Each track can be manipulated to turn on or off. There is also an animated playhead that moves along with the beat of the kick.<br /><br />

          LOOP MACHINA is compatible only on iPad & Desktop
        </p>
        <div id="project-links">
          <p id="link">
            <a href="https://loopmachina.tk/" target="_blank">LIVE SITE</a>
          </p>
          <p id="link">
            <a href="https://github.com/rainerb16/MVP-Loop-Machina" target="_blank"
              >VIEW CODE</a
            >
          </p>
        </div>
      </div>
      <div class="project-item">
        <h2>NERDR</h2>
        <img src="../assets/nerdr-thumbnail.png" alt="Thumbnail of NERDR" />
        <h4>NERDR - Clone of a Simple Twitter like platform</h4>
        <p>
          The idea is showcase my skills with Vue, Python, Flask and MariaDB/SQL. 
          Style wise, I wanted to curate this platform to fit more of my personality rather
          than just a regular Twitter clone. NERDR follow's CRUD principles using an API I created
          with Python and Flask. My database is managed with DBeaver.<br /><br />
          NERDR is mobile and desktop compatible.
        </p>
        <div id="project-links">
          <p id="link">
            <a href="https://nerdr.ml/" target="_blank">LIVE SITE</a>
          </p>
          <p id="link">
            <a href="https://github.com/rainerb16/Vue-Tweeter" target="_blank">VIEW CODE</a>
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
            <a href="https://poke8bit.ml/" target="_blank">LIVE SITE</a>
          </p>
          <p id="link">
            <a href="https://github.com/rainerb16/w10c-classic-pokemon-battle" target="_blank"
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
            <a href="https://github.com/rainerb16/W14B-Vue-Rock-Paper-Scissors" target="_blank"
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
            <a href="https://kanyerest.ml/" target="_blank">LIVE SITE</a>
          </p>
          <p id="link">
            <a href="https://github.com/rainerb16/kanye-rest-api-generator" target="_blank"
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
          CSS/Sass units. This showcase my use of HTML, SCSS, SEO analtyics,
          grids and simple animations.<br /><br />
          OKOTOKS PIZZA's website is mobile and desktop compatible.
        </p>
        <div id="project-links">
          <p id="link">
            <a href="https://straightouttaokotoks.ml" target="_blank">LIVE SITE</a>
          </p>
          <p id="link">
            <a href="https://github.com/rainerb16/Okotoks-Pizza-Project" target="_blank"
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
