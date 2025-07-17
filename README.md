# 河北沙城经济开发区企业服务驿站

基于 uniapp + uview-plus 框架开发的微信小程序，为企业提供一站式服务。

## 项目特性

- 🎨 现代化UI设计，符合微信小程序设计规范
- 📱 响应式布局，适配不同屏幕尺寸
- 🚀 基于 uniapp 3.x 框架，支持多端发布
- 🎯 集成 uview-plus 组件库，开发效率高
- 📋 企业服务功能模块化设计
- ⚡ 使用 Vue 3 Composition API，性能更优

## 功能模块

### 首页 (pages/index/index)
- 企业服务驿站横幅展示
- 八大服务模块：
  - 金融服务 (financialService.png)
  - 科技申报 (science.png)
  - 资源共享 (resourceSharing.png)
  - 法律服务 (legalService.png)
  - 项目投资 (projectInvestment.png)
  - 诉求反映 (demand.png)
  - 人力资源 (HR.png)
  - 营商监督 (businessSupervision.png)
- 园区动态新闻列表

### 园区简介 (pages/park-intro/park-intro)
- 园区基本信息介绍
- 园区优势展示
- 联系方式
- 园区地图展示
- 图片画廊展示

### 金融服务 (pages/financial/financial)
- 金融服务相关功能
- 金融产品展示
- 服务申请流程

### 图片测试 (pages/test-image/test-image)
- 图片功能测试页面

## 技术栈

- **框架**: uniapp 3.x (alpha-4000020231225001)
- **UI组件**: uview-plus 3.1.41
- **开发语言**: Vue 3.2.37 + JavaScript (使用 Composition API)
- **样式**: SCSS
- **构建工具**: Vite 4.0.0
- **工具库**: 
  - dayjs 1.11.13 (日期处理)
  - clipboard 2.0.11 (剪贴板功能)

## 项目结构

```
├── pages/                 # 页面目录
│   ├── index/            # 首页
│   │   └── index.vue
│   ├── park-intro/       # 园区简介
│   │   └── park-intro.vue
│   ├── financial/        # 金融服务
│   │   └── financial.vue
│   └── test-image/       # 图片测试
│       └── test-image.vue
├── static/               # 静态资源
│   ├── images/          # 图片资源
│   │   └── index/       # 首页图片
│   │       ├── businessSupervision.png  # 营商监督
│   │       ├── demand.png               # 诉求反映
│   │       ├── financialService.png     # 金融服务
│   │       ├── HR.png                   # 人力资源
│   │       ├── legalService.png         # 法律服务
│   │       ├── projectInvestment.png    # 项目投资
│   │       ├── resourceSharing.png      # 资源共享
│   │       └── science.png              # 科技申报
│   └── icons/           # 图标资源
│       ├── arrowRight.png
│       ├── index.png / index_active.png
│       ├── park.png / park_active.png
│       ├── title_icon.png
│       └── title_icon2.png
├── utils/                # 工具函数
│   └── composables.js   # 组合式API工具
├── unpackage/           # 构建输出目录
├── App.vue              # 应用入口
├── main.js              # 主入口
├── pages.json           # 页面配置
├── manifest.json        # 应用配置
├── uni.scss             # 全局样式
├── vite.config.js       # Vite配置
├── package.json         # 依赖配置
└── .gitignore           # Git忽略文件
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
4. 使用微信开发者工具打开 `unpackage/dev/mp-weixin` 目录
5. 在微信开发者工具中预览和调试

### 自定义配置

- 修改 `manifest.json` 中的小程序 AppID
- 在 `pages.json` 中配置页面路由和导航栏
- 在 `uni.scss` 中自定义全局样式变量

## 部署说明

1. 执行构建命令：`npm run build:mp-weixin`
2. 在微信开发者工具中打开 `unpackage/build/mp-weixin` 目录
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

## uView Plus 使用说明

### 安装和配置
1. 已安装 uview-plus 3.1.41 版本
2. 在 `main.js` 中引入并注册
3. 在 `App.vue` 中引入样式
4. 在 `pages.json` 中配置 easycom 自动导入

### 常用组件
- `u-button`: 按钮组件
- `u-icon`: 图标组件
- `u-input`: 输入框组件
- `u-form`: 表单组件
- `u-card`: 卡片组件
- `u-list`: 列表组件
- `u-modal`: 模态框组件
- `u-popup`: 弹出层组件

### 自动导入配置
项目已配置 easycom 自动导入，无需手动引入组件：

```json
"easycom": {
  "autoscan": true,
  "custom": {
    "^u--(.*)": "uview-plus/components/u-$1/u-$1.vue",
    "^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
    "^u-([^-].*)": "uview-plus/components/u-$1/u-$1.vue"
  }
}
```

## 导航栏配置

项目使用蓝色主题导航栏：
- 导航栏背景色：`#1989fa`
- 导航栏文字颜色：`white`
- 页面背景色：`#f7f8fa`

## 底部标签栏

配置了两个主要标签页：
- **首页**: 企业服务驿站主页
- **园区简介**: 园区信息展示

## 注意事项

- 请确保在 `manifest.json` 中填写正确的小程序 AppID
- 静态资源图片已配置完成，可根据需要替换
- 根据实际需求修改服务模块的跳转逻辑
- 建议使用真实的API接口替换模拟数据
- 项目使用 Vue3 Composition API，确保开发环境支持
- uView Plus 组件库已配置完成，可直接使用
- 构建输出目录为 `unpackage/`

## 许可证

MIT License 