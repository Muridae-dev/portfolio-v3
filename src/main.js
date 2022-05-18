import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css'

let app = createApp(App)

app.config.globalProperties.globalVar = "this is global"

app.use(router).mount('#app')
