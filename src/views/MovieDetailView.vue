<template>
  <section id="movies-detail">
    <!-- loading -->
    <Loader v-if="movies.isLoading" />

    <div v-else class="h-[95vh] md:h-[100vh]">
      <div
        class="align z-10 px-4 mx-auto lg:max-w-7xl h-[5%] flex md:px-8 pt-2 shadow-md text-center align-middle my-auto"
      >
        <a @click="$router.go(-1)" class="my-auto cursor-pointer">
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
        class="px-4 mx-auto lg:max-w-7xl md:px-8 h-[85%] overflow-y-auto pt-4"
      >
        <img
          :src="movies.detail.Poster"
          class="object-fill w-[100%] md:w-auto mx-auto"
          alt=""
        />
        <div class="content-text mt-3">
          <h1 class="text-2xl">{{ movies.detail.Title }}</h1>
          <div class="flex justify-between">
            <h3 class="text-sm">
              {{ movies.detail.Year }} - {{ movies.detail.Runtime }}
            </h3>
            <h3 class="text-sm">{{ movies.detail.imdbRating }}/10</h3>
          </div>

          <div class="mt-3 flex space-x-2 genre flex-wrap">
            <div
              class="item mt-2"
              v-for="(item, index) in splitedList(movies.detail.Genre)"
              :key="index"
            >
              <div class="px-3 py-1 border rounded-full shadow-sm">
                {{ item }}
              </div>
            </div>
          </div>

          <div class="main mt-6">
            <h1>{{ movies.detail.Plot }}</h1>
            <hr class="my-3" />
            <h1>
              <span class="font-bold pr-2"> Director </span>
              {{ movies.detail.Director }}
            </h1>
            <hr class="my-3" />
            <h1>
              <span class="font-bold pr-2"> Writer </span>
              {{ movies.detail.Writer }}
            </h1>
            <hr class="my-3" />
            <h1>
              <span class="font-bold pr-2"> Actor </span>
              {{ movies.detail.Actors }}
            </h1>
            <hr class="my-3" />
          </div>
        </div>
      </div>
      <div class="align z-10 px-4 mx-auto lg:max-w-7xl h-[5%] md:px-8 mt-3">
        <button @click="goToBooking(movies.detail.imdbID)" class="rounded-none w-full bg-[#605DEC] text-white py-3">
          Book
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex';
import Loader from '../components/Loader.vue';
export default {
  name: 'Movie Detail',
  components: { Loader },
  computed: {
    ...mapState(['movies']),
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    getMovieDetail() {
      this.$store.dispatch('movies/getDetailMovie', this.$route.params.id);
    },
    splitedList(str) {
      return str !== null & str !== undefined ? str.split(', ') : '';
    },
    goToBooking(id) {
      // id = this.slug(id);
      this.$router.push({
        name: "Booking Seat",
        params: {
          id: id,
        },
      });
    },

  },
  mounted() {
    this.$emit('scrollToTop', true);
    this.getMovieDetail();
  },
};
</script>
<style lang=""></style>
