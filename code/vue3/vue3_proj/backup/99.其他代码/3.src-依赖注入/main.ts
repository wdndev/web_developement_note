import {createApp} from 'vue'
import App from './App.vue'
import { userKey } from './keys'

// 创建应用
const app = createApp(App)

app.provide(userKey, {name: '张三'})
// 挂载应用
app.mount('#app')