<script setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})

onShow(() => {
  console.log('App Show')
})

onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import 'uview-plus/index.scss';
/* 全局样式 */
page {
  background-color: #f7f8fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
}

.container {
  padding: 0;
  margin: 0;
}

/* 通用样式类 */
.text-primary {
  color: #1989fa;
}

.text-white {
  color: #ffffff;
}

.text-gray {
  color: #7A7E83;
}

.bg-primary {
  background-color: #1989fa;
}

.bg-white {
  background-color: #ffffff;
}

.rounded {
  border-radius: 8rpx;
}

.shadow {
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.1);
}
</style> 