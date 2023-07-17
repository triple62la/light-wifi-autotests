
import {createRouter, createWebHistory} from "vue-router"
import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";
import NotFound from "@/pages/NotFound";
import AppLayout from "@/pages/AppLayout";
import Users from "@/pages/Users";
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
        path: "/users",
        component: Users,
        name: "users",
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound
    },
    {
        path: "/test",
        component: AppLayout,
        name: "test"
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes, // short for `routes: routes`
})



export default router