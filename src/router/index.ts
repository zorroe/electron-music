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
  },
  {
    // 歌单详情
    path: "/playlist/:id",
    name: "playlist",
    component: () => import("@/components/Playlist.vue"),
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
