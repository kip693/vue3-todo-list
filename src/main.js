import { createApp, h } from 'vue'
import App from './components/App.vue'
import './index.css'
import router from "./router/router"
import store from "./stores/sotre"
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
//     { path: '/vue3', component: Vue3TodoList}
//   ]

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes,
//   })

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')

