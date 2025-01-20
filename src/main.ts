import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "normalize.css/normalize.css";
import "@/styles/index.scss";
import "amfe-flexible";
import "vant/lib/index.css";
import "@/permission";
import { Button, Form, Field, NavBar, Search, Tabbar, TabbarItem, Toast, CellGroup, Icon } from "vant";
import { createPinia } from "pinia";
import BusPlugin from "@/utils/bus";
import "video.js/dist/video-js.css";
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
  .use(CellGroup)
  .use(Icon)
  .use(Form)
  .use(router)
  .use(pinia)
  .use(BusPlugin);
app.mount("#app");
