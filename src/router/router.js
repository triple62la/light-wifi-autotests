
import {createRouter, createWebHistory} from "vue-router"
import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";
import NotFound from "@/pages/NotFound";
const routes = [
    {
        path: "/",
        name: "main",
        component: MainPage
    },
    {
        path: "/login",
        component: LoginPage,
        name: "login"
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes, // short for `routes: routes`
})

export default router