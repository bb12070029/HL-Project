<template>
  <view class="container">
    <!-- 页面标题 -->
    <!-- <view class="banner">
        <image
          src="@/static/images/financial/banner.png"
          class="banner-image"
          mode="widthFix"
        />
      </view> -->
    <view class="content">
      <view class="content-header">
        <view class="content-title">金融产品服务方式</view>
        <view class="content-desc"
          >开发区与多家银行机构建立合作关系，为园区企业提供多元化金融产品和便捷服务通道，助力企业解决融资难题，促进企业健康发展。
        </view>
      </view>
      <view class="content-list">
        <view class="semicircle"></view>
        <view class="semicircleCard-title">合作银行</view>
        <view class="content-item">
          <image
            src="@/static/images/financial/bankIcon.png"
            class="content-item-image"
            mode="widthFix"
          />
          <view class="content-item-content">
            <view class="content-item-content-title">中国银行怀来县支行 </view>
            <view class="content-item-content-desc">
              提供多种企业金融产品
            </view>
          </view>
          <image
            src="@/static/images/financial/bankRight.png"
            class="content-item-arrow"
            mode="widthFix"
          />
        </view>
        <view class="content-item">
          <image
            src="@/static/images/financial/bankIcon.png"
            class="content-item-image"
            mode="widthFix"
          />
          <view class="content-item-content">
            <view class="content-item-content-title">中国银行怀来县支行 </view>
            <view class="content-item-content-desc">
              提供多种企业金融产品
            </view>
          </view>
          <image
            src="@/static/images/financial/bankRight.png"
            class="content-item-arrow"
            mode="widthFix"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss" scoped>
@import "@/static/style.scss";

.container {
  position: relative;
  background-color: $bg-color;
  .banner {
    width: 100%;
    height: 475rpx;
    .banner-image {
      width: 100%;
    }
  }
  .content {
    // transform: translateY(-280rpx);
    padding: 30rpx;
    .content-header {
      // width: 690rpx;
      // height:355rpx;
      padding: 43rpx;
      border-radius: 18rpx;
      background-color: $white;
      text-align: center;
      .content-title {
        @include title-text;
        margin-bottom: 30rpx;
      }
      .content-desc {
        font-size: 24rpx;
        color: $text-color-light;
        text-align: left;
        line-height: 41rpx;
      }
    }
    .content-list {
      @include semicircleCard;
      margin-top: 20rpx;
      .content-item {
        position: relative;
        margin-bottom: 10rpx;
        display: flex;
        align-items: center;
        background-color: #ECF0FF;
        border-radius: 10rpx;
        padding:30rpx;
        .content-item-image {
          width: 38rpx;
          height: 34rpx;
          margin-right:30rpx;
        }
        .content-item-content {
          flex:1;
          .content-item-content-title {
            font-weight: 400;
            font-size: 28rpx;
            color: #000000;
            line-height: 47rpx;
            margin-bottom: 10rpx;
          }
          .content-item-content-desc {
            font-size: 20rpx;
            line-height: 47rpx;
            color: $text-color-light;
          }
        }
        .content-item-arrow {
          width: 11rpx;
          height: 21rpx;
          position: absolute;
          right: 30rpx;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
