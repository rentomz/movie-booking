<template>
  <section id="booking-seat">
    <div class="module">
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
        <div class="border-4 py-4 text-center screen">
          <h3 class="text-xl">Screen</h3>
        </div>
        <div className="grid grid-cols-5 lg:grid-cols-4  gap-2 relative my-8">
          <div class="item" v-for="(item, index) in seat" :key="index">
            <button
              :class="item.checked ? 'border-cyan-800' : 'border-gray-400'"
              class="border-4 py-y text-center py-2 w-full"
              @click="addValueSeat(item, index)"
            >
              <h1>{{ item.value }}</h1>
            </button>
          </div>
        </div>
      </div>
      <div
        class="align z-10 px-4 mx-auto lg:max-w-7xl h-[5%] md:px-8 mt-3 flex space-x-4"
      >
        <select
          class="w-1/3 form-select block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          :value="bookingNumber"
          @change="selectBookingNumber"
        >
          <option selected>0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button
          @click="goToHistory()"
          class="rounded-none w-full bg-[#605DEC] text-white"
        >
          Select
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'Booking Seat',
  computed: {
    ...mapState(['movies', 'seats', 'history']),
  },
  data() {
    return {
      id: this.$route.params.id,
      seat: [
        { value: 'A1', checked: false },
        { value: 'A2', checked: false },
        { value: 'A3', checked: false },
        { value: 'A4', checked: false },
        { value: 'A5', checked: false },
        { value: 'B1', checked: false },
        { value: 'B2', checked: false },
        { value: 'B3', checked: false },
        { value: 'B4', checked: false },
        { value: 'B5', checked: false },
        { value: 'C1', checked: false },
        { value: 'C2', checked: false },
        { value: 'C3', checked: false },
        { value: 'C4', checked: false },
        { value: 'C5', checked: false },
      ],
      bookingNumber: 0,
    };
  },
  methods: {
    getMovieDetail() {
      this.$store.dispatch('movies/getDetailMovie', this.$route.params.id);
    },
    addValueSeat(data, index) {
      console.log(this.$store.state.seats.valueSeat, data, index);
    },
    addValueSeat(data, index) {
      if (this.bookingNumber > this.$store.state.seats.valueSeat.length) {
        if (this.seat[index].checked != true) {
          this.seat[index].checked = true;
          // this.valueSeat.push(data);
          this.$store.dispatch('seats/addData', data.value);
        } else {
          this.seat[index].checked = false;
          this.$store.dispatch(
            'seats/removeData',
            this.$store.state.seats.valueSeat.filter(function (e) {
              return e !== data.value;
            })
          );
        }
      } else if ((this.seat[index].checked = true)) {
        this.seat[index].checked = false;
        this.$store.dispatch(
          'seats/removeData',
          this.$store.state.seats.valueSeat.filter(function (e) {
            return e !== data.value;
          })
        );
      }
    },
    selectBookingNumber(event) {
      // this.valueSeat = [];
      this.$store.dispatch('seats/removeData', []);

      this.seat = [
        { value: 'A1', checked: false },
        { value: 'A2', checked: false },
        { value: 'A3', checked: false },
        { value: 'A4', checked: false },
        { value: 'A5', checked: false },
        { value: 'B1', checked: false },
        { value: 'B2', checked: false },
        { value: 'B3', checked: false },
        { value: 'B4', checked: false },
        { value: 'B5', checked: false },
        { value: 'C1', checked: false },
        { value: 'C2', checked: false },
        { value: 'C3', checked: false },
        { value: 'C4', checked: false },
        { value: 'C5', checked: false },
      ];
      this.bookingNumber = event.target.value.trim();
    },

    goToHistory() {
      // id = this.slug(id);
      if (this.$store.state.seats.valueSeat.length == this.bookingNumber) {
        const movieData = this.$store.state.movies.detail;
        var data = {
          imdbID: movieData.imdbID,
          Title: movieData.Title,
          Plot: movieData.Plot,
          Actors: movieData.Actors,
          Genre: movieData.Genre,
          Poster: movieData.Poster,
          Director: movieData.Director,
          Writer: movieData.Writer,
          valueSeat: this.$store.state.seats.valueSeat,
        };

        this.$store.dispatch('history/addData', data);
        this.$router.push({
          name: 'History',
        });
      } else {
        alert('Jumlah Booking tidak sama dengan Seat Yang di pilih');
      }
    },
  },
  mounted() {
    this.$emit('scrollToTop', true);
    this.getMovieDetail();
  },
};
</script>
<style lang=""></style>
