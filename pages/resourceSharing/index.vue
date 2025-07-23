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
        <view class="content-title">资源共享 </view>
        <view class="content-desc"
          >为切实提升园区营商环境，帮助企业开拓市场，提升园区企业资源内循环解决企业上下游资源匮乏问题，打通河北沙城经济开发区牵头建立"资源共享池"，搭建高效的沟通桥梁，为企业提供适配的共享服务，推动开发区企业高质量发展。
        </view>
      </view>
      <view class="content-list">
        <view class="content-item" @click="navigateToBusiness">
          <image
            src="@/static/images/financial/btnBg2.png"
            class="content-item-image"
            mode="widthFix"
          />
          <text class="content-item-title content-item-title-2"
            >企业产品展示</text
          >
        </view>
        <view class="content-item" @click="navigateToWorkshop">
          <image
            src="@/static/images/financial/btnBg2.png"
            class="content-item-image"
            mode="widthFix"
          />
          <text class="content-item-title content-item-title-2"
            >园区空闲厂房</text
          >
        </view>
      </view>
      <!-- 咨询 -->
      <view class="consult">
        <view class="semicircle"></view>
        <text class="semicircleCard-title">资源共享咨询 </text>
        <view class="consult-content">
          <view class="consult-top">
            <view class="consult-top-item">
              <text class="consult-top-item-title">联系人：</text>
              <text>李经理</text>
            </view>
            <view class="consult-top-item" @click="callPhone">
              <text class="consult-top-item-title">联系电话：</text>
              <text>0313-6809816<up-icon name="phone-fill" size="20" color="#0345FA"></up-icon></text>
            </view>
          </view>
          <view class="consult-desc">
            <image
              src="@/static/images/index/businessSupervision.png"
              class="consult-desc-image"
              mode="widthFix"
            />
            <view class="consult-desc-text">扫码访问资源共享平台</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
const callPhone = () => {
  uni.makePhoneCall({
    phoneNumber: "13800138000",
  });
};
const navigateToBusiness = () => {
  uni.navigateTo({
    url: "/pages/resourceSharing/business",
  });
};
const navigateToWorkshop = () => {
  uni.navigateTo({
    url: "/pages/resourceSharing/workshop",
  });
};
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
      margin-top: 20rpx;
      .content-item {
        text-align: center;
        position: relative;
        margin-bottom: 10rpx;
        .content-item-title {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          bottom: 0;
          color: $white;
          font-size: 28rpx;
          transform: translateY(-50%);
        }
        .content-item-title-2 {
          color: $text-color;
        }
      }
    }
    .consult {
      @include semicircleCard;
      .consult-content {
        border: 1px solid #0345fa;
        border-radius: 10rpx;
        .consult-top {
          background-color: #EDF1FF;
          border-radius: 10rpx 10rpx 0 0;
          padding: 25rpx 35rpx;
          .consult-top-item {
            font-size: 24rpx;
            .consult-top-item-title {
              color: $text-color-light;
            }
            .consult-top-item-text {
              color: #000000;
            }
          }
        }
        .consult-desc {
          text-align: center;
          padding: 50rpx 0;
          .consult-desc-image {
            width: 260rpx;
            height: 260rpx;
          }
          .consult-desc-text {
            font-size: 24rpx;
            color: $text-color-light;
            line-height: 40rpx;
          }
        }
      }
    }
  }

  ::v-deep .u-icon {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
