import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "normalize.css/normalize.css";
import "@/styles/index.scss";
import "amfe-flexible";
import "vant/lib/index.css";
import "@/permission";
import { Button, Field, NavBar, Search, Tabbar, TabbarItem, Toast } from "vant";
import { createPinia } from "pinia";
import BusPlugin from "@/utils/bus";
const app = createApp(App);

const pinia = createPinia();

app
  .use(Button)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Toast)
  .use(Field)
  .use(Search)
  .use(router)
  .use(pinia)
  .use(BusPlugin);
app.mount("#app");
