import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})

const app = createApp(App)

app.use(router)

app.mount('#app')
