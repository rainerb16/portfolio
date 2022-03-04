<template>
  <div>
    <div id="footer-links">
      <p>made by rainer b.</p>
      <p><a href="mailto:hello@rainerb.com">[email]</a></p>
      <p><a href="https://github.com/rainerb16" target="_blank">[github]</a></p>
      <p>
        <a href="https://www.linkedin.com/in/rainerbrieger/" target="_blank"
          >[linkedin]</a
        >
      </p>
      <p>
        <a href="https://twitter.com/RainerB16" target="_blank">[twitter]</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-page",
};
</script>

<style lang="scss" scoped>
a:link {
  color: black;
}
a:visited {
  color: black;
}
#footer-links {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 5px;
  margin-top: 5vh;
}
p {
  font-size: 12px;
}

// TABLET
@media only screen and (min-width: 768px) {
  p {
    font-size: 16px;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  p {
    font-size: 18px;
  }
}
</style>
