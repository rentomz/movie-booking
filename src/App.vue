<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView @scrollToTop="scrollToTop"/>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style scoped>
</style>
