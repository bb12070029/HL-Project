<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="banner">
      <image
        src="@/static/images/financial/banner.png"
        class="banner-image"
        mode="widthFix"
      />
    </view>
    <view class="content">
      <view class="content-header">
        <view class="content-title">科技申报</view>
        <view class="content-desc"
          >开发区服务驿站助力企业科技创新，为企业提供科技政策解读、科技成果申报、技术成果对接、创新平台建设的一站式帮扶服务。
        </view>
      </view>
      <view class="content-list">
        <view class="content-item">
          <view class="semicircle"></view>
          <text class="content-item-title">企业科技创新政策咨询与解读 </text>
          <view class="content-item-desc">
            <view class="content-item-desc-item">
              1. 提供科技创新相关政策咨询，帮助企业理解政策内容。
            </view>
            <view class="content-item-desc-item">
              2.解读政策细则，协助企业申请相关科技领域项目，为企业发展提供政策支持。
            </view>
          </view>
        </view>
        <view class="content-item">
          <view class="semicircle"></view>
          <text class="content-item-title">企业技术对接与合作</text>
          <view class="content-item-desc">
            <view class="content-item-desc-item">
              1. 促进企业与高校、科研院所的技术合作。
            </view>
            <view class="content-item-desc-item">
              2. 组织技术对接活动，推动技术转移和成果转化。
            </view>
          </view>
        </view>
        <view class="content-item">
          <view class="semicircle"></view>
          <text class="content-item-title">企业创新平台建设</text>
          <view class="content-item-desc">
            <view class="content-item-desc-item">
              1. 支持企业建立研发中心、实验室等创新平台。
            </view>
            <view class="content-item-desc-item">
              2. 提供平台建设指导和资源对接。
            </view>
          </view>
        </view>

        <view class="content-item content-item2">
          <view class="semicircle"></view>
          <text class="content-item-title">科技领域项目申报</text>
          <view class="content-item-desc">
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-image-box">
                <image
                  src="@/static/icons/technology.png"
                  class="content-item-desc-item-image"
                />
                <view class="content-item-desc-item-title">
                  科技型中小企业、高新技术企业、技术创新中心申 报机构:
                  <view class="content-item-desc-item-text"
                    >怀来县教育体育和科学技术局</view
                  >
                </view>
              </view>

              <view class="content-item-desc-item-phone" @click="callPhone">
                <text>联系电话：</text>
                <text class="content-item-desc-item-phone-number">
                  0313-6860618
                </text>
                <up-icon name="phone-fill" size="20" color="#0345FA"></up-icon>
              </view>
            </view>
          </view>
          <view class="content-item-desc">
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-image-box">
                <image
                  src="@/static/icons/technology.png"
                  class="content-item-desc-item-image"
                />
                <view class="content-item-desc-item-title">
                  创新型企业、专精特新中小企业、工业企业研发机构申报机构:
                  <view class="content-item-desc-item-text">怀来县数据局 </view>
                </view>
              </view>

              <view class="content-item-desc-item-phone" @click="callPhone">
                <text>联系电话：</text>
                <text class="content-item-desc-item-phone-number">
                  0313-6860689
                </text>
                <up-icon name="phone-fill" size="20" color="#0345FA"></up-icon>
              </view>
            </view>
          </view>
          <view class="content-item-desc">
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-image-box">
                <image
                  src="@/static/icons/technology.png"
                  class="content-item-desc-item-image"
                />
                <view class="content-item-desc-item-title">
                  企业技术中心申报机构:
                  <view class="content-item-desc-item-text"
                    >怀来县发展和改革局</view
                  >
                </view>
              </view>

              <view class="content-item-desc-item-phone" @click="callPhone">
                <text>联系电话：</text>
                <text class="content-item-desc-item-phone-number">
                  0313-6860712
                </text>
                <up-icon name="phone-fill" size="20" color="#0345FA"></up-icon>
              </view>
            </view>
          </view>
          <view class="content-item-desc">
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-image-box">
                <image
                  src="@/static/icons/technology.png"
                  class="content-item-desc-item-image"
                />
                <view class="content-item-desc-item-title">
                  全程帮办代办服务机构:
                  <view class="content-item-desc-item-text"
                    >河北沙城经济开发区科技和人才管理局</view
                  >
                </view>
              </view>

              <view class="content-item-desc-item-phone" @click="callPhone">
                <text>联系电话：</text>
                <text class="content-item-desc-item-phone-number">
                  0313-6860689
                </text>
                <up-icon name="phone-fill" size="20" color="#0345FA"></up-icon>
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

const callPhone = () => {
  uni.makePhoneCall({
    phoneNumber: "13800138000",
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
    transform: translateY(-280rpx);
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
        position: relative;
        margin-bottom: 10rpx;
        padding: 40rpx;
        overflow: hidden;
        background-color: $white;
        border-radius: 18rpx;
        .semicircle {
          @include semicircle;
        }
        .content-item-title {
          font-size: 32rpx;
          color: #000000;
          line-height: 41rpx;
        }
        .content-item-desc {
          margin-top: 38rpx;
          .content-item-desc-item {
            font-size: 24rpx;
            color: $text-color-light;
            background-color: #f6f7f9;
            border-radius: 10rpx;
            margin-bottom: 10rpx;
            padding: 24rpx 20rpx;
          }
        }
      }
      .content-item2 {
        .content-item-desc-item-image {
          width: 37rpx;
          height: 37rpx;
          margin-right: 17rpx;
        }
        .content-item-desc {
          border: 1px solid #0345fa;
          border-radius: 10rpx;
          .content-item-desc-item {
            padding: 0;
            margin: 0;
            .content-item-desc-item-image-box {
              display: flex;
              align-items: top;
              justify-content: space-between;
              padding: 30rpx 15rpx;
              .content-item-desc-item-title {
                width: 100%;
                line-height: 40rpx;
                font-size: 24rpx;
                color: $text-color-light;
                .content-item-desc-item-text {
                  color: #000;
                  font-size: 28rpx;
                  line-height: 30rpx;
                  text-align: center;
                  margin-top: 15rpx;
                }
              }
            }

            .content-item-desc-item-phone {
              background: #edf2ff;
              font-size: 24rpx;
              line-height: 62rpx;
              text-align: center;
              color: $text-color-light;
              border-radius: 0 0 10rpx 10rpx;
              .content-item-desc-item-phone-number {
                color: #0345fa;
              }
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
