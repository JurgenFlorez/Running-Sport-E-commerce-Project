import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/Home.vue";
import LoginView from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: localStorage.token != undefined ? HomeView : LoginView,
    },
  ],
});

export default router;
