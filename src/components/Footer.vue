<template>
  <div id="footer-links">
    <p>made by rainer b.</p>
    <a href="mailto:hello@rainerb.com">[email]</a>
    <a href="https://github.com/rainerb16" target="_blank">[github]</a>
    <a href="https://www.linkedin.com/in/rainerbrieger/" target="_blank">[linkedin]</a>
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 4px;
  margin-top: 5vh;
  flex-wrap: wrap; // prevents cutoff on small screens
}
p {
  font-size: 16px;
}

// TABLET
@media only screen and (min-width: 768px) {
  #footer-links {
    gap: 20px;
  }
  p {
    font-size: 20px;
  }
  a {
  font-size: 18px;
  }
}

// DESKTOP
// @media only screen and (min-width: 1020px) {
//   #footer-links {
//     gap: 10px;
//   }
// }
</style>
