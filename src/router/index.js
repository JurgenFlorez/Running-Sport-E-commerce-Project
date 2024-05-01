import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import LoginView from "../views/Login.vue";
import Principalpage from "../views/Registro.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", // Ruta raíz
      name: "Home",
      component: HomeView,
      beforeEnter: (to, from, next) => {
        // Verificar si hay un token en el almacenamiento local
        const token = localStorage.getItem("token");
        if (token) {
          // Si hay un token, ir a la página principal
          next({ name: "principal" });
        } else {
          // Si no hay un token, ir a la página de inicio de sesión
          next();
        }
      },
    },
    {
      path: "/principal",
      name: "principal",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/Registro",
      name: "registro",
      component: () => import("../views/Registro.vue"),
    },
  ],
});

export default router;
