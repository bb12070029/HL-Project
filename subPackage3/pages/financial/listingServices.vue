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
        <view class="content-title">企业挂牌上市服务 </view>
        <view class="content-desc"
          >开发区设立企业挂牌上市专项服务团队，提供专业指导和政策支持，帮助园区企业对接资本市场，加快推进企业上市进程。
        </view>
      </view>
      <view class="content-list">
        <view class="content-item">
          <view class="semicircle"></view>
          <text class="semicircleCard-title">资源共享咨询 </text>
          <view class="content-item-content">
            <view class="content-item-content-title">
              <image
                src="@/subPackage3/static/financial/listingServicesIcon.png"
                class="content-item-content-title-image"
                mode="widthFix"
              />
              <text>企业挂牌上市全流程指导图</text>
            </view>
            <view class="content-item-content-desc">
              <image
                src="@/subPackage3/static/financial/listingServices.png"
                class="content-item-content-desc-image"
                mode="widthFix"
              />
            </view>
          </view>
        </view>
      </view>
      <!-- 联系方式 -->
      <view class="consult">
        <view class="semicircle"></view>
        <text class="semicircleCard-title">联系方式</text>
        <view class="consult-content">
          <view class="consult-top">
            <view class="consult-top-item">
              <text class="consult-top-item-title">开发区经发局：</text>
              <text class="number" @click="callPhone('0313-6800916')"
                >0313-6800916</text
              >
            </view>
            <view class="consult-top-item" @click="callPhone('13898765432')">
              <text class="consult-top-item-title">李主任：</text>
              <text class="number">
                13898765432
                <up-icon name="phone-fill" size="20" color="#0345FA"></up-icon
              ></text>
            </view>
          </view>
          <view class="consult-desc">
            <image
              src="@/static/images/index/businessSupervision.png"
              class="consult-desc-image"
              mode="widthFix"
            />
            <view class="consult-desc-text">扫码获取挂牌上市服务</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
const callPhone = (number) => {
  uni.makePhoneCall({
    phoneNumber: number,
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
        @include semicircleCard;
        .content-item-content {
          .content-item-content-title {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 50rpx;
            .content-item-content-title-image {
              width: 29rpx;
              height: 29rpx;
              margin-right: 10rpx;
            }
          }
        }
        .content-item-content-desc {
          .content-item-content-desc-image {
            width: 100%;
          }
        }
      }
    }
    .consult {
      @include semicircleCard;
      .consult-content {
        border: 1px solid #0345fa;
        border-radius: 10rpx;
        .consult-top {
          background-color: #edf1ff;
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
            .number {
              color: $link-color;
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
