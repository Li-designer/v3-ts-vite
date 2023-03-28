import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "amfe-flexible";
import "vant/lib/index.css";
import { Button, NavBar, showLoadingToast, Tabbar, TabbarItem, Toast } from "vant";
import { createPinia } from "pinia";

const app = createApp(App);

const pinia = createPinia();
app.config.globalProperties.$showMsgToast = () => {
  return showLoadingToast({
    message: "加载中...",
    forbidClick: true,
    loadingType: "spinner"
  });
};
app.use(Button).use(NavBar).use(Tabbar).use(TabbarItem).use(Toast).use(router).use(pinia);
app.mount("#app");
