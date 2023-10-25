import {createPinia} from "pinia"
import { createApp,} from 'vue'
import App from "./App"
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import Main from "./assets/styles/main.css"
import router from "@/router/router";
import ContextMenu from '@imengyu/vue3-context-menu'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ContextMenu)
app.mount('#app')

