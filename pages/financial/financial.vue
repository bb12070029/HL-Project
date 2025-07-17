<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="page-header">
      <van-icon name="gold-coin-o" size="32" color="#1989fa" />
      <text class="page-title">金融服务</text>
    </view>

    <!-- 服务列表 -->
    <view class="service-list">
      <view 
        class="service-card" 
        v-for="(service, index) in financialServices" 
        :key="index"
        @click="handleServiceClick(service)"
      >
        <view class="service-header">
          <van-icon :name="service.icon" size="24" color="#1989fa" />
          <text class="service-name">{{ service.name }}</text>
        </view>
        <view class="service-desc">{{ service.description }}</view>
        <view class="service-footer">
          <text class="service-status" :class="service.status">{{ service.statusText }}</text>
          <van-icon name="arrow" size="16" color="#c8c9cc" />
        </view>
      </view>
    </view>

    <!-- 联系信息 -->
    <view class="contact-info">
      <view class="contact-title">金融服务中心</view>
      <view class="contact-item">
        <van-icon name="phone-o" size="16" color="#1989fa" />
        <text class="contact-text">咨询电话：0313-12345678</text>
      </view>
      <view class="contact-item">
        <van-icon name="clock-o" size="16" color="#1989fa" />
        <text class="contact-text">工作时间：周一至周五 9:00-17:00</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

// 响应式数据
const financialServices = ref([
  {
    name: '企业贷款',
    description: '为园区企业提供便捷的贷款服务，支持多种担保方式',
    icon: 'balance-o',
    status: 'available',
    statusText: '可申请'
  },
  {
    name: '融资担保',
    description: '专业的融资担保服务，降低企业融资门槛',
    icon: 'certificate-o',
    status: 'available',
    statusText: '可申请'
  },
  {
    name: '投资咨询',
    description: '提供专业的投资咨询服务，助力企业健康发展',
    icon: 'chart-trending-o',
    status: 'available',
    statusText: '可申请'
  },
  {
    name: '保险服务',
    description: '为企业提供全面的保险解决方案',
    icon: 'shield-o',
    status: 'coming',
    statusText: '即将上线'
  }
])

// 方法
const handleServiceClick = (service) => {
  if (service.status === 'available') {
    uni.showToast({
      title: `申请${service.name}`,
      icon: 'none'
    })
    // 这里可以添加具体的申请逻辑
  } else {
    uni.showToast({
      title: '该服务即将上线，敬请期待',
      icon: 'none'
    })
  }
}
</script>

<style scoped>
.container {
  padding: 20rpx;
  background-color: #f7f8fa;
  min-height: 100vh;
}

.page-header {
  display: flex;
  align-items: center;
  margin-bottom: 32rpx;
  padding: 24rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
}

.page-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333333;
  margin-left: 16rpx;
}

.service-list {
  margin-bottom: 32rpx;
}

.service-card {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 24rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.service-card:active {
  transform: scale(0.98);
  box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.1);
}

.service-header {
  display: flex;
  align-items: center;
  margin-bottom: 12rpx;
}

.service-name {
  font-size: 28rpx;
  font-weight: 500;
  color: #333333;
  margin-left: 12rpx;
}

.service-desc {
  font-size: 26rpx;
  color: #666666;
  line-height: 1.5;
  margin-bottom: 16rpx;
}

.service-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.service-status {
  font-size: 24rpx;
  padding: 4rpx 12rpx;
  border-radius: 12rpx;
}

.service-status.available {
  background-color: #e8f5e8;
  color: #07c160;
}

.service-status.coming {
  background-color: #fff7e6;
  color: #ff976a;
}

.contact-info {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
}

.contact-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #333333;
  margin-bottom: 16rpx;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 12rpx;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-text {
  font-size: 26rpx;
  color: #666666;
  margin-left: 12rpx;
}
</style> 