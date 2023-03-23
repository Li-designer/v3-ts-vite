import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import 'vant/lib/index.css';
import { Button } from 'vant';
import { createPinia } from 'pinia'


const app = createApp(App)
const pinia = createPinia()
app.use(Button).use(pinia)
app.mount('#app')