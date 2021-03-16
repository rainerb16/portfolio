<template>
  <div id="contact-page">
    <h2
      id="sub-title"
      class="animate__animated animate__fadeIn animate__delay-1s	1s"
    >
      [contact]
    </h2>
    <img
      id="rainer-photo"
      src="../assets/rainer3.jpg"
      alt="Photo of Rainer"
      class="animate__animated animate__fadeInLeftBig animate__delay-1s	1s"
    />
    <h3 class="animate__animated animate__fadeIn animate__delay-1s	1s">
      please contact me for any inquiries
    </h3>
    <div
      id="contact-links"
      class="animate__animated animate__fadeIn animate__delay-1s	1s"
    >
      <p><a href="mailto:hello@rainerb.com">[email]</a></p>
      <p><a href="https://www.linkedin.com/in/rainerbrieger/" target="_blank">[linkedin]</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-page"
};
</script>

<style lang="scss" scoped>
a:link {
  color: black;
}
a:visited {
  color: black;
}
#contact-page {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
}
#rainer-photo {
  width: 75%;
  border-radius: 5%;
  margin-top: 3vh;
  margin-bottom: 3vh;
}
#contact-links {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 25vh;
  margin-top: 3vh;
}

// TABLET
@media only screen and (min-width: 768px) {
  #rainer-photo {
    width: 50%;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #rainer-photo {
    width: 25%;
  }
}
</style>
