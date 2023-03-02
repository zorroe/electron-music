import { createApp } from "vue";
import "@/assets/style/global.css";
import "./style.css";
import App from "./App.vue";
import "@/samples/node-api";
import router from "@/router/index";
import { createPinia } from "pinia";
import IconPark from '@/components/IconPark.vue'

const pinia = createPinia();
const app = createApp(App);

app.component('icon-park', IconPark)
  .use(router)
  .use(pinia)
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
