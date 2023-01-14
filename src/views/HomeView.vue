<template>
  <section id="movies">
    <!-- loading -->

    <Loader v-if="movies.isLoading" />

    <div v-else>
      <div class="px-4 mx-auto lg:max-w-7xl md:px-8 h-[90vh] overflow-y-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 relative my-8">
          <div
            class="item"
            v-for="(item, index) in movies.data.Search"
            :key="index"
          >
            <div class="max-w-xs m-1 md:m-3 px-1 md:px-4 py-4">
              <a @click="goToDetail(item.imdbID)" class="cursor-pointer">
                <!-- image not null -->
                <img
                  class="object-cover"
                  v-if="item.Poster != 'N/A'"
                  :src="item.Poster"
                  alt="Poster"
                />
                <!-- image null -->
                <img
                  class="object-cover h-[250px]"
                  v-else
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/Dummy_flag.png"
                  alt="Poster"
                />

                <div class="pt-2">
                  <div class="font-bold mb-2 text-center">
                    {{ item.Title }}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="align z-10 px-4 mx-auto lg:max-w-7xl md:px-8 mt-3 ">
        <button class="rounded-none w-full bg-[#605DEC] text-white py-3 mx-auto" @click="goToHistory()">History</button>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex';
import Loader from '../components/Loader.vue';
export default {
  name: 'Home',
  components: { Loader },
  computed: {
    ...mapState(['movies']),
  },
  methods: {
    moviesData() {
      this.$store.dispatch('movies/getData');
    },
    goToDetail(id) {
      // id = this.slug(id);
      this.$router.push({
        name: "Movie Detail",
        params: {
          id: id,
        },
      });
    },
    goToHistory() {
      this.$router.push({
          name: 'History',
        });
    },
  },
  mounted() {
    this.$emit('scrollToTop', true);
    this.moviesData();
  },
};
</script>
<style lang=""></style>
