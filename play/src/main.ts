import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import jwUi from '@jw-ui/components'
import Button from '@jw-plus/components/Button'
import Input from '@jw-plus/components/Input'

import * as comp from "@jw-plus/components"


Object.entries(comp).forEach(([name,comp]) => {
    console.log(name);
    console.log(comp);
})


import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)

app.mount('#app')
