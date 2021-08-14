import { createRouter, createWebHistory } from 'vue-router';
import test from "../components/PageCounter.vue"
import PageNotFound from "../components/PageNotFound.vue"
import Home from "../components/Home.vue"

export const router =  createRouter({
  history: createWebHistory(),
  routes: [
    {
        path:"/",
        component: Home,
        name: "Home",
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