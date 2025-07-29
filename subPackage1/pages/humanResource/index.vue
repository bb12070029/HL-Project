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
        <view class="content-title">人力资源</view>
        <view class="content-desc"
          >开发区企业驿站为园区企业提供全方位的人力资源服务，包括人才招聘、岗位发布、员工培训、人才引进等多项服务，助力企业引才、育才、留才，推动园区人才资源优化配置和高质量发展。
        </view>
      </view>
      <view class="content-list">
        <view class="content-item content-item2">
          <view class="semicircle"></view>
          <text class="semicircleCard-title">人才招聘服务 </text>
          <image
            src="@/subPackage1/static/projectInvestment/banner.png"
            class="content-item-image"
          />
          <view class="content-item-desc">
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                助力企业与我市大专院校建立联系，推进人才供
                需合作，建立产学研联合体，为企业招人用人提 供支撑
              </view>
              <view class="content-item-desc-item-text">
                联系张家口职业技术学院、张家口市技师学院等院校
              </view>
              <view class="content-item-desc-item-btn">
                <image
                  src="@/subPackage1/static/humanResource/arrowRight.png"
                  class="content-item-desc-item-image"
                />
              </view>
            </view>
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                发布劳动就业信息，帮助企业和职工办理相关手续
              </view>
              <view class="content-item-desc-item-text">
                就业服务中心、人才交流服务中心等服务机构
              </view>
              <view class="content-item-desc-item-btn">
                <image
                  src="@/subPackage1/static/humanResource/arrowRight.png"
                  class="content-item-desc-item-image"
                />
              </view>
            </view>
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                搭建园区人才资源服务平台，提供培训.洽谈场所。组织开展对接、交流活动等
              </view>
              <view class="content-item-desc-item-text">
                怀来县委组织部人才科、开发区科技和人才管理局
              </view>
              <view class="content-item-desc-item-btn">
                <image
                  src="@/subPackage1/static/humanResource/arrowRight.png"
                  class="content-item-desc-item-image"
                />
              </view>
            </view>
          </view>
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
        .content-item-image {
          width: 100%;
          height: 314rpx;
          border-radius: 10rpx;
          margin-bottom: 20rpx;
        }
        .content-item-desc {
          .content-item-desc-title {
            font-size: 24rpx;
            color: #000;
            line-height: 40rpx;
            margin-bottom: 20rpx;
          }
          .content-item-desc-item {
            font-size: 24rpx;
            color: $text-color-light;
            border-radius: 10rpx;
            margin-bottom: 23rpx;
            padding: 30rpx 40rpx;
            background-color: $white;
            box-shadow: 0 0 10rpx 0 rgba(0, 0, 0, 0.1);
            .content-item-desc-item-title {
              color: $text-color;
              margin-bottom: 20rpx;
              font-size: 26rpx;
              .content-item-desc-item-image {
                width: 30rpx;
                height: 27rpx;
                margin-right: 17rpx;
              }
            }
            .content-item-desc-item-text {
              font-size: 22rpx;
              color: $text-color-light;
              line-height: 40rpx;
            }
            .content-item-desc-item-btn {
              text-align: right;
              .content-item-desc-item-image {
                width: 26rpx;
                height: 19rpx;
              }
            }
          }
        }
      }
      .content-item2 {
        @include organizationCard;
      }
    }
  }
  ::v-deep .u-icon {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
