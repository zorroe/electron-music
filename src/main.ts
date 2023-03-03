import { createApp } from "vue";
import "@/assets/style/global.css";
import "./style.css";
import App from "./App.vue";
import "@/samples/node-api";
import router from "@/router/index";
import pinia from "./store/store";
import IconPark from '@/components/IconPark.vue'

const app = createApp(App);

app.use(router)
app.use(pinia)
app.component('icon-park', IconPark)
app.mount("#app").$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
