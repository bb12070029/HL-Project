# 河北沙城经济开发区企业服务驿站

基于 uniapp + vant-weapp 框架开发的微信小程序，为企业提供一站式服务。

## 项目特性

- 🎨 现代化UI设计，符合微信小程序设计规范
- 📱 响应式布局，适配不同屏幕尺寸
- 🚀 基于 uniapp 框架，支持多端发布
- 🎯 集成 vant-weapp 组件库，开发效率高
- 📋 企业服务功能模块化设计

## 功能模块

### 首页
- 企业服务驿站横幅展示
- 八大服务模块：金融服务、科技申报、资源共享、法律服务、项目投资、诉求反映、人力资源、营商监督
- 园区动态新闻列表

### 园区简介
- 园区基本信息介绍
- 园区优势展示
- 联系方式
- 园区地图展示
- 图片画廊展示

### uView UI 演示
- 基础组件演示
- 表单组件演示
- 数据展示组件
- 反馈组件演示

## 技术栈

- **框架**: uniapp 3.x
- **UI组件**: vant-weapp + uview-ui
- **开发语言**: Vue 3 + JavaScript (使用 Composition API)
- **样式**: SCSS
- **构建工具**: Vite

## 项目结构

```
├── pages/                 # 页面目录
│   ├── index/            # 首页
│   ├── park-intro/       # 园区简介
│   ├── financial/        # 金融服务
├── static/               # 静态资源
│   ├── images/          # 图片资源
│   └── icons/           # 图标资源
├── utils/                # 工具函数
│   └── composables.js   # 组合式API工具
├── App.vue              # 应用入口
├── main.js              # 主入口
├── pages.json           # 页面配置
├── manifest.json        # 应用配置
├── uni.scss             # 全局样式
├── uview.config.js      # uView UI 配置
├── vite.config.js       # Vite配置
└── package.json         # 依赖配置
```

## 安装和运行

### 1. 安装依赖

```bash
npm install
```

### 2. 开发模式

```bash
npm run dev:mp-weixin
```

### 3. 构建生产版本

```bash
npm run build:mp-weixin
```

## 开发说明

### 环境要求

- Node.js >= 16
- 微信开发者工具
- uniapp CLI

### 开发流程

1. 克隆项目到本地
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run dev:mp-weixin`
4. 使用微信开发者工具打开 `dist/dev/mp-weixin` 目录
5. 在微信开发者工具中预览和调试

### 自定义配置

- 修改 `manifest.json` 中的小程序 AppID
- 在 `pages.json` 中配置页面路由和导航栏
- 在 `uni.scss` 中自定义全局样式变量

## 部署说明

1. 执行构建命令：`npm run build:mp-weixin`
2. 在微信开发者工具中打开 `dist/build/mp-weixin` 目录
3. 上传代码到微信小程序后台
4. 提交审核并发布

## Vue3 特性

本项目使用 Vue3 的 Composition API 开发，主要特性包括：

- **`<script setup>` 语法糖**: 简化组件编写，无需 return 语句
- **响应式 API**: 使用 `ref()`, `reactive()`, `computed()` 等
- **生命周期钩子**: `onMounted()`, `onUnmounted()` 等
- **组合式函数**: 可复用的逻辑封装在 `utils/composables.js` 中

### 示例用法

```vue
<script setup>
import { ref, onMounted } from 'vue'
import { useCounter, useStorage } from '@/utils/composables'

// 响应式数据
const count = ref(0)

// 组合式API
const { value: theme, setValue: setTheme } = useStorage('theme', 'light')
const { count: counter, increment } = useCounter(0)

// 生命周期
onMounted(() => {
  console.log('组件已挂载')
})
</script>
```

## uView UI 使用说明

### 安装和配置
1. 已安装 uview-ui 2.0.31 版本
2. 在 `main.js` 中引入并注册
3. 在 `App.vue` 中引入样式
4. 在 `manifest.json` 中配置组件路径

### 常用组件
- `u-button`: 按钮组件
- `u-icon`: 图标组件
- `u-input`: 输入框组件
- `u-form`: 表单组件
- `u-card`: 卡片组件
- `u-list`: 列表组件
- `u-modal`: 模态框组件
- `u-popup`: 弹出层组件

### 主题配置
在 `uview.config.js` 中可以自定义主题色和组件样式。

## 注意事项

- 请确保在 `manifest.json` 中填写正确的小程序 AppID
- 静态资源图片需要替换为实际使用的图片
- 根据实际需求修改服务模块的跳转逻辑
- 建议使用真实的API接口替换模拟数据
- 项目使用 Vue3 Composition API，确保开发环境支持
- uView UI 组件库已配置完成，可直接使用

## 许可证

MIT License 