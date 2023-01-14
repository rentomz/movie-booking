import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MovieDetailView from '../views/MovieDetailView.vue';
import BookMovieView from '../views/BookMovie.vue';
import HistoryView from '../views/HistoryView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/movie/:id',
      name: 'Movie Detail',
      component: MovieDetailView,
      meta: {
        title: 'Detail',
      },
    },

    {
      path: '/movie/:id/booking',
      name: 'Booking Seat',
      component: BookMovieView,
      meta: {
        title: 'Booking',
      },
    },

    {
      path: '/history',
      name: 'History',
      component: HistoryView,
      meta: {
        title: 'History Booking',
      },
    },
    // {
  ],
});

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });
router.beforeEach((to, from, next) => {
  // console.log(to);
  document.title = 'Movie - ' + to.meta.title;
  next();
});

export default router;
