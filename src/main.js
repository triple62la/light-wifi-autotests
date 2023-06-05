import { createApp,} from 'vue'
import App from "./App"

import "./assets/styles/main.css"
import router from "@/router/router";

const app = createApp(App)
app.use(router)
app.mount('#app')

