<template>
  <view class="container">
    <image
      src="@/static/images/park-intro/header.png"
      class="banner-image"
      mode="widthFix"
    />
    <view class="banner">
      <view class="banner-content">
        <view class="main-title">河北沙城经济开发区 招商推介</view>
      </view>
    </view>
    <view class="content">
      <view class="section-intro">
        <image
          src="@/static/images/park-intro/container1.png"
          class="section-intro-image"
          mode="widthFix"
        />
      </view>
      <view class="section-intro">
        <image
          src="@/static/images/park-intro/container2.png"
          class="section-intro-image"
          mode="widthFix"
        />
      </view>
      <view class="section-intro">
        <image
          src="@/static/images/park-intro/container3.png"
          class="section-intro-image"
          mode="widthFix"
        />
      </view>
      <view class="section-intro">
        <image
          src="@/static/images/park-intro/container4.png"
          class="section-intro-image"
          mode="widthFix"
        />
      </view>
      <view class="section-intro">
        <image
          src="@/static/images/park-intro/container5.png"
          class="section-intro-image"
          mode="widthFix"
        />
      </view>
      <view class="section-intro">
        <image
          src="@/static/images/park-intro/container6.png"
          class="section-intro-image"
          mode="widthFix"
        />
      </view>
      <view class="section-intro">
        <image
          src="@/static/images/park-intro/container7.png"
          class="section-intro-image"
          mode="widthFix"
        />
      </view>
      <view class="section-intro">
        <image
          src="@/static/images/park-intro/container8.png"
          class="section-intro-image"
          mode="widthFix"
        />
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";

// 园区优势数据
</script>

<style scoped lang="scss">
@import "@/static/style.scss";
.container {
  background-color: #0549fa;
  padding: 20rpx;
  position: relative;
  .banner-image {
    width: 100%;
    height: 517rpx;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .banner {
    height: 410rpx;
    position: relative;
    z-index: 2;
    .main-title {
      font-size: 64rpx;
      font-weight: bold;
      line-height: 1.4;
      color: $white;
      text-align: center;
      padding-top: 100rpx;
    }
  }
  .content {
    position: relative;
    z-index: 3;
    .section-intro {
      width: 100%;
      margin-bottom: 10rpx;
      .section-intro-image {
        width: 100%;
      }
    }
  }
}
</style>
