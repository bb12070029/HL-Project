<template>
  <view class="container">
    <!-- 页面标题 -->
    <!-- <view class="banner">
      <image
        src="@/subPackage3/static/financial/banner.png"
        class="banner-image"
        mode="widthFix"
      />
    </view> -->
    <view class="content">
      <view class="content-header">
        <view class="content-title">金融服务</view>
        <view class="content-desc"
          >为切实提升园区营商环境，进一步优化融资服务环境，解决企业融资难、融资慢问题，打通融资助企"最后一公里"，河北沙城经济开发区牵头建立融资服务"直通车"，搭建高效的沟通桥梁，为企业提供适配的金融服务，推动开发区企业高质量发展。
        </view>
      </view>
      <view class="content-list">
        <view class="content-item" @click="navigateToProduct">
          <image
            src="@/subPackage3/static/financial/btnBg.png"
            class="content-item-image"
            mode="widthFix"
          />
          <text class="content-item-title">金融产品服务</text>
        </view>
        <view class="content-item" @click="navigateToListingServices">
          <image
            src="@/subPackage3/static/financial/btnBg2.png"
            class="content-item-image"
            mode="widthFix"
          />
          <text class="content-item-title content-item-title-2"
            >企业挂牌上市服务</text
          >
        </view>
        <view class="content-item" @click="navigateToServersDemand">
          <image
            src="@/subPackage3/static/financial/btnBg2.png"
            class="content-item-image"
            mode="widthFix"
          />
          <text class="content-item-title content-item-title-2"
            >企业融资服务需求</text
          >
        </view>
      </view>
      <!-- 风险提示 -->
      <view class="risk-warning">
        <image
          src="@/subPackage3/static/financial/warning.png"
          class="risk-warning-bg"
          mode="widthFix"
        />
        <view class="risk-warning-content">
          <view class="risk-warning-title">
            <image
              src="@/static/icons/warningIcon.png"
              class="risk-warning-title-image"
            />
            <text class="risk-warning-title-text">风险</text>提示
          </view>
          <view class="risk-warning-desc">
            银行机构不收取除正常利息之外的手续费、中介费等其他费用，谨防各类电信诈骗和非法中介、"资金捐客"等。
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
const navigateToProduct = () => {
  uni.navigateTo({
    url: "/subPackage3/pages/financial/product",
  });
};
const navigateToServersDemand = () => {
  uni.navigateTo({
    url: "/subPackage3/pages/financial/serversDemand",
  });
};
const navigateToListingServices = () => {
  uni.navigateTo({
    url: "/subPackage3/pages/financial/listingServices",
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
    .risk-warning {
      position: relative;
      margin-top: 20rpx;
      background-color: $white;
      border-radius: 18rpx;
      .risk-warning-bg {
        width: 100%;
      }
      .risk-warning-content {
        padding: 26rpx 42rpx;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .risk-warning-title {
          font-size: 28rpx;
          color: $text-color;
          margin-bottom: 28rpx;
          .risk-warning-title-text {
            color: #ff3000;
          }
          .risk-warning-title-image {
            width: 43rpx;
            height: 49rpx;
            margin-right: 15rpx;
            vertical-align: middle;
          }
        }
        .risk-warning-desc {
          font-size: 24rpx;
          color: $text-color;
        }
      }
    }
  }
}
</style>
