<template>
  <footer>
    <p>
      &copy; {{ year }} Errietta Kostala
    </p>
    <p>
      <a target="_blank" href="http://www.twitter.com/errietta">
        Twitter
      </a>
      -
      <a
        href="http://www.linkedin.com/in/errietta"
        target="_blank"
      >
        LinkedIn
      </a> -
      <a
        href="mailto:errietta@errietta.me"
      >
        Email
      </a> -
      <a
        href="tel:+442081337423"
      >
        020 8133 7423
      </a>
    </p>
  </footer>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    year: new Date().getFullYear()
  })
})
</script>

<style scoped>
  footer {
    text-align: center;
    color: gray;
  }
</style>
