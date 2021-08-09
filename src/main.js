import { createApp, h } from 'vue'
import App from './components/App.vue'
import './index.css'
import router from "./router/router"
import store from "./stores/sotre"


// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
//     { path: '/vue3', component: Vue3TodoList}
//   ]

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes,
//   })

const app = createApp({App})
app.use(store)
app.use(router)
app.mount('#app')

