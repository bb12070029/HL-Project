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
        <view class="content-title">项目投资</view>
        <view class="content-desc"
          >我们将以最热情的态度、精准化的服务为您及您的"朋友圈"，在项目投资、产业落地、手续陪跑等方面提供专业化咨询服务，为新项目在最短时间内落地提供有效便捷途径。
        </view>
      </view>
      <view class="content-list">
        <view class="content-item content-item2">
          <view class="semicircle"></view>
          <text class="semicircleCard-title">服务内容</text>
          <image
            src="@/static/images/projectInvestment/banner.png"
            class="content-item-image"
          />
          <view class="content-item-desc">
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                <image
                  src="@/static/images/projectInvestment/icon1.png"
                  class="content-item-desc-item-image"
                />
                企业挂牌上市服务
              </view>
            </view>
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                <image
                  src="@/static/images/projectInvestment/icon2.png"
                  class="content-item-desc-item-image"
                />
                企业接待、座谈对接、商务接待等
              </view>
            </view>
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                <image
                  src="@/static/images/projectInvestment/icon3.png"
                  class="content-item-desc-item-image"
                />
                新项目匹配合适地块及闲置厂房
              </view>
            </view>
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                <image
                  src="@/static/images/projectInvestment/icon4.png"
                  class="content-item-desc-item-image"
                />协助企业完成项目立项、工商注册、帐户开设、税务登记
              </view>
            </view>
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                <image
                  src="@/static/images/projectInvestment/icon5.png"
                  class="content-item-desc-item-image"
                />帮扶企业协调联系相关部门
              </view>
            </view>
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                <image
                  src="@/static/images/projectInvestment/icon6.png"
                  class="content-item-desc-item-image"
                />企业及产品在国家及省市展会、宣传推广平台展示展览
              </view>
            </view>
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                <image
                  src="@/static/images/projectInvestment/icon7.png"
                  class="content-item-desc-item-image"
                />其他与新项目投资相关事项
              </view>
            </view>
          </view>
        </view>
        <view class="number-box">
          <text class="title">联系方式</text>
          <view class="number-box-list">
            <view class="number-box-item">
              <image
                src="@/static/images/projectInvestment/icon8.png"
                class="number-box-image"
              />
              <view class="number-box-item-text">联系人：张经理</view>
            </view>
            <view class="number-box-item">
              <image
                src="@/static/images/projectInvestment/icon9.png"
                class="number-box-image"
              />
              <view class="number-box-item-text">
                电话：<text class="callNumber" @click="callPhone('0313-6809123')"
                  >0313-6809123 拨打
                </text>
              </view>
            </view>
            <view class="number-box-item">
              <image
                src="@/static/images/projectInvestment/icon10.png"
                class="number-box-image"
              />
              <view class="number-box-item-text">邮箱：contact@hbzhineng.com </view>
            </view>
            <view class="number-box-item">
              <image
                src="@/static/images/projectInvestment/icon11.png"
                class="number-box-image"
              />
              <view class="number-box-item-text">地址：怀来县沙城经济开发区智造产业园B区12号</view>
            </view>
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
            padding: 24rpx 20rpx;
            background-color: #f6f7f9;
            .content-item-desc-item-title {
              display: flex;
              align-items: center;
              .content-item-desc-item-image {
                width: 30rpx;
                height: 27rpx;
                margin-right: 17rpx;
              }
            }
            .content-item-desc-item-text {
              font-size: 24rpx;
              color: $text-color-light;
              line-height: 40rpx;
            }
          }
        }
      }
      .content-item2 {
        @include organizationCard;
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
  ::v-deep .u-icon {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
