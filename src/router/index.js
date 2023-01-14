import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MovieDetailView from '../views/MovieDetailView.vue';

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
