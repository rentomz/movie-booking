<template>
  <section id="History">
    <div class="h-[93vh] md:h-[100vh]">
      <div
        class="align z-10 px-4 mx-auto lg:max-w-7xl h-[5%] flex md:px-8 pt-2 shadow-md text-center align-middle my-auto"
      >
        <a @click="$router.push({ path: '/'})" class="my-auto cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </a>
      </div>
      <div
        class="px-4 mx-auto lg:max-w-7xl md:px-8 h-[95%] overflow-y-auto pt-4"
      >
        <div
          className="grid grid-cols-2 gap-4 my-8"
          v-for="(item, index) in history.dataHistory"
          :key="index"
        >
          <div class="left-content">
            <img
              class="object-cover"
              v-if="item.Poster != 'N/A'"
              :src="item.Poster"
              alt="Poster"
            />
          </div>
          <div class="right-content">
            <h1 class="title text-lg mb-2 font-bold">{{ item.Title }}</h1>
            <p class=" mb-2  font-bold">Seats : {{ item.valueSeat.join(', ') }}</p>
            <p class="mb-2 text-sm">{{ item.Genre }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'History',
  computed: {
    ...mapState(['history']),
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$emit('scrollToTop', true);
  },
};
</script>
<style lang=""></style>
