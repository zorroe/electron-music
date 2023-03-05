import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    // 个人主页
    path: "/user/:id",
    name: "user",
    component: () => import("@/components/User.vue"),
  },
  {
    // 发现音乐
    path: "/discover",
    name: "discover",
    component: () => import("@/components/Discover.vue"),
  }
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
