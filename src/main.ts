import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@/samples/node-api";
import router from "@/router/index";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app
  .use(router)
  .use(pinia)
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
