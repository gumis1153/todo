import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: () => import("../views/Tasks.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
