<template>
  <view class="container">
    <view class="header">
      <text class="title">u-image 测试页面</text>
    </view>
    
    <view class="content">
      <!-- 调试信息 -->
      <view class="section">
        <text class="section-title">调试信息</text>
        <text class="debug-text">页面已加载，检查组件是否正常</text>
      </view>
      
      <!-- 原生image标签测试 -->
      <view class="section">
        <text class="section-title">原生image标签</text>
        <image 
          src="https://via.placeholder.com/300x200/1989fa/ffffff?text=原生图片" 
          style="width: 300rpx; height: 200rpx;"
          mode="aspectFill"
        ></image>
      </view>
      
      <!-- u-image标签测试 -->
      <view class="section">
        <text class="section-title">u-image标签</text>
        <u-image 
          src="https://via.placeholder.com/300x200/1989fa/ffffff?text=uview图片" 
          width="300" 
          height="200"
        ></u-image>
      </view>
      
      <!-- 简化版u-image测试 -->
      <view class="section">
        <text class="section-title">简化版u-image</text>
        <u-image src="https://via.placeholder.com/200x150/ff6b6b/ffffff?text=简化版"></u-image>
      </view>
      
      <!-- 本地图片测试 -->
      <view class="section">
        <text class="section-title">本地图片</text>
        <u-image 
          src="/static/images/index/financialService.png" 
          width="300rpx" 
          height="200rpx"
          mode="aspectFill"
        ></u-image>
      </view>
      
      <!-- 带占位图的图片 -->
      <view class="section">
        <text class="section-title">带占位图的图片</text>
        <u-image 
          src="https://via.placeholder.com/300x200/1989fa/ffffff?text=测试图片" 
          width="300rpx" 
          height="200rpx"
          mode="aspectFill"
          :fade="true"
          :lazy-load="true"
        ></u-image>
      </view>
      
      <!-- 圆形图片 -->
      <view class="section">
        <text class="section-title">圆形图片</text>
        <u-image 
          src="https://via.placeholder.com/200x200/1989fa/ffffff?text=圆形" 
          width="200rpx" 
          height="200rpx"
          shape="circle"
          mode="aspectFill"
        ></u-image>
      </view>
      
      <!-- 带边框的图片 -->
      <view class="section">
        <text class="section-title">带边框的图片</text>
        <u-image 
          src="https://via.placeholder.com/300x200/1989fa/ffffff?text=边框" 
          width="300rpx" 
          height="200rpx"
          mode="aspectFill"
          :border="true"
          border-radius="12rpx"
        ></u-image>
      </view>
      
      <!-- 测试按钮 -->
      <view class="section">
        <text class="section-title">测试按钮</text>
        <u-button type="primary" text="测试按钮" @click="testClick"></u-button>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 测试图片加载事件
const onLoad = (e) => {
  console.log('图片加载成功', e)
}

const onError = (e) => {
  console.log('图片加载失败', e)
}

const testClick = () => {
  console.log('按钮点击成功')
  uni.showToast({
    title: '按钮点击成功',
    icon: 'success'
  })
}

onMounted(() => {
  console.log('页面已挂载')
  // 检查uview-plus是否可用
  if (typeof uni !== 'undefined') {
    console.log('uni对象可用')
  }
  
  // 检查uview-plus组件是否可用
  setTimeout(() => {
    console.log('检查uview-plus组件...')
  }, 1000)
})
</script>

<style lang="scss" scoped>
.container {
  padding: 20rpx;
  background-color: #f7f8fa;
  min-height: 100vh;
}

.header {
  text-align: center;
  padding: 40rpx 0;
  
  .title {
    font-size: 36rpx;
    font-weight: bold;
    color: #333;
  }
}

.content {
  .section {
    margin-bottom: 40rpx;
    padding: 30rpx;
    background-color: #fff;
    border-radius: 12rpx;
    
    .section-title {
      display: block;
      font-size: 28rpx;
      font-weight: bold;
      color: #333;
      margin-bottom: 20rpx;
    }
    
    .debug-text {
      display: block;
      font-size: 24rpx;
      color: #666;
      margin-bottom: 20rpx;
    }
    
    .u-image {
      margin-bottom: 20rpx;
    }
    
    .u-button {
      margin-bottom: 20rpx;
    }
  }
}
</style> 