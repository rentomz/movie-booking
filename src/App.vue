<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <RouterView @scrollToTop="scrollToTop" />
  </div>
</template>

<script>
export default {
  computed: {
    functionVH() {
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      // We listen to the resize event
      window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>

</style>
