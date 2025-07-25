<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="banner">
      <image
        src="@/static/images/financial/productDetailbanner.png"
        class="banner-image"
        mode="widthFix"
      />
    </view>
    <view class="content">
      <view class="content-list">
        <view class="content-item">
          <image
            src="@/static/images/financial/bankIcon2.png"
            class="content-item-image"
            mode="widthFix"
          />
          <view class="content-item-content">
            <view class="content-item-content-title">微捷贷</view>
            <view class="content-item-content-desc">
              小微企业快速信贷产品
            </view>
          </view>
          <button class="content-item-button" @click="navigateToProduct">
            查看
          </button>
        </view>
        <view class="content-item">
          <image
            src="@/static/images/financial/bankIcon2.png"
            class="content-item-image"
            mode="widthFix"
          />
          <view class="content-item-content">
            <view class="content-item-content-title">中银税贷</view>
            <view class="content-item-content-desc">
              基于纳税信用的信贷产品
            </view>
          </view>
          <button class="content-item-button" @click="navigateToProduct">
            查看
          </button>
        </view>
        <view class="content-item">
          <image
            src="@/static/images/financial/bankIcon2.png"
            class="content-item-image"
            mode="widthFix"
          />
          <view class="content-item-content">
            <view class="content-item-content-title">科技贷</view>
            <view class="content-item-content-desc">
              专为科技型企业设计
            </view>
          </view>
          <button class="content-item-button" @click="navigateToProduct">
            查看
          </button>
        </view>
      </view>
      <view class="number-box">
        <text class="title">联系方式</text>
        <view class="number-box-list">
          <view class="number-box-item">
            <image
              src="@/static/images/projectInvestment/icon11.png"
              class="number-box-image"
            />
            <view class="number-box-item-text"
              >地址：怀来县沙城镇府前街28号</view
            >
          </view>
          <view class="number-box-item">
            <image
              src="@/static/images/projectInvestment/icon9.png"
              class="number-box-image"
            />
            <view class="number-box-item-text">
              电话：<text class="callNumber" @click="callPhone('0313-2912313')"
                >0313-2912313 拨打
              </text>
            </view>
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
    url: "/pages/financial/productDetail",
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
    transform: translateY(-230rpx);
    padding: 30rpx;
    .content-info {
      .content-info-title {
        @include title-text;
        margin-bottom: 30rpx;
      }
      .content-info-desc {
        .content-info-desc-item {
        }
      }
    }
    .content-list {
      margin-top: 20rpx;
      .content-item {
        display: flex;
        align-items: center;
        background-color: $white;
        font-size: 24rpx;
        color: $text-color-light;
        line-height: 41rpx;
        padding: 30rpx;
        border-radius: 10rpx;
        margin-bottom: 20rpx;
        .content-item-image {
          width: 38rpx;
          height: 34rpx;
          margin-right: 30rpx;
        }
        .content-item-content {
          flex: 1;
          .content-item-content-title {
            font-size: 28rpx;
            color: $text-color;
            line-height: 47rpx;
            margin-bottom: 10rpx;
          }
          .content-item-content-desc {
            font-size: 20rpx;
            color: $text-color-light;
            line-height: 47rpx;
          }
        }
        .content-item-button {
          width: 100rpx;
          height: 50rpx;
          background-color: $link-color;
          color: $white;
          border-radius: 10rpx;
          font-size: 22rpx;
        }
      }
    }
    .number-box {
      padding: 40rpx;
      background: $white;
      border-radius: 18rpx;
      .title {
        @include title-text;
      }
      .number-box-list {
        background: #f2f6ff;
        border-radius: 10rpx;
        padding: 30rpx;
        margin-top: 30rpx;
        font-size: 24rpx;
        color: $text-color;
        .number-box-item {
          display: flex;
          align-items: center;
          padding: 10rpx 0;

          .number-box-image {
            width: 22rpx;
            height: 22rpx;
            margin-right: 17rpx;
          }
          .callNumber {
            color: $link-color;
          }
        }
      }
    }
  }
}
</style>
