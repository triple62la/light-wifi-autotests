import {createPinia} from "pinia"
import { createApp,} from 'vue'
import App from "./App"

import Main from "./assets/styles/main.css"
import router from "@/router/router";


const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

