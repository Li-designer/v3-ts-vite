
import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import 'amfe-flexible'
import 'vant/lib/index.css';
import { Button, NavBar, Tabbar, TabbarItem } from 'vant';
import { createPinia } from 'pinia'


const app = createApp(App)



const pinia = createPinia()
app.use(Button).use(NavBar).use(Tabbar).use(TabbarItem).use(router).use(pinia)
app.mount('#app')