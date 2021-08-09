import { createRouter, createWebHistory } from 'vue-router';
import test from "../components/PageCounter.vue"
import App from "../components/App.vue"
import PageNotFound from "../components/PageNotFound.vue"

export const router =  createRouter({
  history: createWebHistory(),
  routes: [
    {
        path:"/",
        component: App,
        name: "App",
    },
    {
        path:"/test",
        component: test,
        name: "test",
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: PageNotFound
    }
  ]
})

export default router