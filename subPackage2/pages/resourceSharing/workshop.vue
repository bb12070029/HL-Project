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
        <view class="content-title">园区空闲厂房</view>
        <view class="content-desc"
          >沙城经济开发区提供多种类型厂房，满足不同企业生产需求。园区厂房配套设施完善，交通便利，可享受园区各项优惠政策。
        </view>
      </view>
      <view class="content-list">
        <view class="semicircle"></view>
        <text class="semicircleCard-title">资源共享咨询 </text>
        <view class="content-item">
          <image
            src="@/subPackage2/static/resourceSharing/businessListImg.png"
            class="content-item-image"
            mode="widthFix"
          />
          <view class="content-item-desc">
            <view class="content-item-desc-title">
              <view class="content-item-desc-title-name"> 厂房名称 </view>
              <view class="content-item-desc-title-text">
                <image
                  src="@/subPackage2/static/resourceSharing/workshopIcon.png"
                  class="content-item-desc-title-image"
                  mode="widthFix"
                />
                位置：沙城经济开发A区东侧
              </view>
            </view>
            <view class="content-item-desc-item">
              <image
                src="@/subPackage2/static/resourceSharing/workshopIcon1.png"
                class="content-item-desc-item-image"
                mode="widthFix"
              />
              面积：1200-3000㎡
            </view>
            <view class="content-item-desc-item">
              <image
                src="@/subPackage2/static/resourceSharing/workshopIcon2.png"
                class="content-item-desc-item-image"
                mode="widthFix"
              />
              交通：便利
            </view>
            <view class="content-item-desc-item">
              <image
                src="@/subPackage2/static/resourceSharing/workshopIcon3.png"
                class="content-item-desc-item-image"
                mode="widthFix"
              />
              配套：水电齐全
            </view>
          </view>
        </view>
        <view class="content-item">
          <image
            src="@/subPackage2/static/resourceSharing/businessListImg.png"
            class="content-item-image"
            mode="widthFix"
          />
          <view class="content-item-desc">
            <view class="content-item-desc-title">
              <view class="content-item-desc-title-name"> 厂房名称 </view>
              <view class="content-item-desc-title-text">
                <image
                  src="@/subPackage2/static/resourceSharing/workshopIcon.png"
                  class="content-item-desc-title-image"
                  mode="widthFix"
                />
                位置：沙城经济开发A区东侧
              </view>
            </view>
            <view class="content-item-desc-item">
              <image
                src="@/subPackage2/static/resourceSharing/workshopIcon1.png"
                class="content-item-desc-item-image"
                mode="widthFix"
              />
              面积：1200-3000㎡
            </view>
            <view class="content-item-desc-item">
              <image
                src="@/subPackage2/static/resourceSharing/workshopIcon2.png"
                class="content-item-desc-item-image"
                mode="widthFix"
              />
              交通：便利
            </view>
            <view class="content-item-desc-item">
              <image
                src="@/subPackage2/static/resourceSharing/workshopIcon3.png"
                class="content-item-desc-item-image"
                mode="widthFix"
              />
              配套：水电齐全
            </view>
          </view>
        </view>
      </view>
      <!-- 咨询 -->
      <view class="consult">
        <view class="semicircle"></view>
        <text class="semicircleCard-title">联系方式</text>
        <view class="consult-content">
          <view class="consult-top">
            <view class="consult-top-item">
              <text class="consult-top-item-title">联系人：</text>
              <text>张经理</text>
            </view>
            <view class="consult-top-item" @click="callPhone">
              <text class="consult-top-item-title">联系电话：</text>
              <text
                >0313-6809816<up-icon
                  name="phone-fill"
                  size="20"
                  color="#0345FA"
                ></up-icon
              ></text>
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
    phoneNumber: "0313-6809816",
  });
};
const navigateToBusiness = () => {
  uni.navigateTo({
    url: "/subPackage2/pages/resourceSharing/business",
  });
};
const navigateToWorkshop = () => {
  uni.navigateTo({
    url: "/subPackage2/pages/resourceSharing/workshop",
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
      margin-bottom: 30rpx;
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
      .content-item {
        position: relative;
        padding-bottom: 30rpx;
        margin-bottom: 30rpx;
        border-bottom: 1px dashed #c9c9c9;
        .content-item-image {
          border-radius: 10rpx;
          margin-bottom: 30rpx;
          width: 100%;
        }
        .content-item-desc {
          .content-item-desc-title {
            .content-item-desc-title-name {
              font-size: 32rpx;
              color: #000000;
              line-height: 41rpx;
              margin-bottom: 30rpx;
              font-weight: bold;
            }
            .content-item-desc-title-text {
              font-size: 26rpx;
              margin-bottom: 30rpx;
              .content-item-desc-title-image {
                width: 19rpx;
                height: 27rpx;
                vertical-align: middle;
              }
            }
          }
          .content-item-desc-item {
            font-size: 24rpx;
            color: $text-color-light;
            line-height: 40rpx;
            background-color: #fafafa;
            margin-bottom: 10rpx;
            padding: 20rpx 40rpx;
            .content-item-desc-item-image {
              width: 30rpx;
              height: 30rpx;
              margin-right: 20rpx;vertical-align: middle;
            }
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
