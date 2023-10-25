
import {createRouter, createWebHistory} from "vue-router"
const LoginPage = ()=> import( "@/pages/LoginPage");
const  MainPage = ()=>import("@/pages/MainPage");
const  NotFound = ()=> import("@/pages/NotFound");
// import AppLayout from "@/pages/AppLayout";
const  Users = ()=> import("@/pages/UsersPage");
const HistoryPage = ()=> import( "@/pages/HistoryPage");
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
    // {
    //     path: "/test",
    //     component: AppLayout,
    //     name: "test"
    // },
    {path: "/history",
    component: HistoryPage,
    name: "history"
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes, // short for `routes: routes`
})



export default router