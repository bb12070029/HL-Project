import { createSSRApp } from 'vue'
import App from './App.vue'
import uViewPlus from 'uview-plus'
import 'uview-plus/index.scss'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uViewPlus)
  // 可以在这里添加全局配置
  // app.config.globalProperties.$http = http
  
  return {
    app
  }
} 