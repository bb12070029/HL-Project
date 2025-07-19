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
        <view class="content-title">法律服务 </view>
        <view class="content-desc"
          >为切实优化营商环境，开发区应企业需求，提供专业的法律意见和解决方案，引领企业合规经营、保护合法权益。
        </view>
      </view>
      <view class="content-list">
        <view class="content-item content-item2">
          <view class="semicircle"></view>
          <text class="semicircleCard-title">法律服务 </text>
          <view class="content-item-desc">
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                <image
                  src="@/static/images/legalService/legal.png"
                  class="content-item-desc-item-image"
                />
                在线法律咨询
              </view>
              <view class="content-item-desc-item-text">
                法律咨询电话随时接听，随时解答。帮助企业解答在经营过程中遇到的法律问题，可按需预约涉诉企业法律服务。
              </view>
            </view>
            <view class="organizationCard-desc">
              <view class="organizationCard-desc-item">
                <view class="organizationCard-desc-item-image-box">
                  <image
                    src="@/static/icons/technology.png"
                    class="organizationCard-desc-item-image"
                  />
                  <view class="organizationCard-desc-item-title">
                    服务机构:
                    <view class="organizationCard-desc-item-text"
                      >河北博远律师事务所</view
                    >
                  </view>
                </view>
                <view class="organizationCard-phone">
                  <view class="organizationCard-phone-item">
                    <text>联系人:</text>
                    <text class="organizationCard-phone-name"> 陈律师 </text>
                  </view>
                  <view class="organizationCard-phone-item" @click="callPhone">
                    <text>联系电话：</text>
                    <text class="organizationCard-phone-number">
                      0313-6860618
                    </text>
                    <up-icon
                      name="phone-fill"
                      size="20"
                      color="#0345FA"
                    ></up-icon>
                  </view>
                </view>
              </view>
            </view>
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                <image
                  src="@/static/images/legalService/lineDown.png"
                  class="content-item-desc-item-image"
                />
                线下服务支持
              </view>
              <view class="content-item-desc-item-text">
                设立法律服务点，举办法律知识讲座。每月适时为企业提供现场法律咨询、案例解析、法律互动等服务。
              </view>
            </view>
          </view>
        </view>
        <view class="content-item content-item2">
          <view class="semicircle"></view>
          <text class="semicircleCard-title">劳动维权服务</text>
          <view class="content-item-desc">
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                <image
                  src="@/static/images/legalService/enterprise.png"
                  class="content-item-desc-item-image"
                />
                企业绿色窗口
              </view>
              <view class="content-item-desc-item-text">
                在人社局三楼开设"企业绿色窗口"，确保案件"快立、快调、快审、快结"，为企业提高办案服务质效，做好企业员工劳动纠纷处理。
              </view>
            </view>
            <view class="organizationCard-desc">
              <view class="organizationCard-desc-item">
                <view class="organizationCard-desc-item-image-box">
                  <image
                    src="@/static/icons/technology.png"
                    class="organizationCard-desc-item-image"
                  />
                  <view class="organizationCard-desc-item-title">
                    服务机构:
                    <view class="organizationCard-desc-item-text"
                      >怀来县劳动调解仲裁办公室</view
                    >
                  </view>
                </view>
                <view class="organizationCard-phone">
                  <view class="organizationCard-phone-item">
                    <text>联系人:</text>
                    <text class="organizationCard-phone-name"> 段向飞 </text>
                  </view>
                  <view class="organizationCard-phone-item" @click="callPhone">
                    <text>联系电话：</text>
                    <text class="organizationCard-phone-number">
                      0313-6896680
                    </text>
                    <up-icon
                      name="phone-fill"
                      size="20"
                      color="#0345FA"
                    ></up-icon>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="content-item content-item2">
          <view class="semicircle"></view>
          <text class="semicircleCard-title">公证办理服务</text>
          <view class="content-item-desc">
            <view class="content-item-desc-title"> 1. 采用供给模式 </view>
            <view class="content-item-desc-item">
              对园区内企业采取巡回办证、上门办证、线上办证等方式，让企业足不出户即可办理公证业务。
            </view>
            <view class="content-item-desc-title">2. 实行"容缺办理" </view>
            <view class="content-item-desc-item">
              做到案件"保质、快办、快结"，压缩办理时间，提高事项办理便利度，实现企业少跑腿。
            </view>
            <view class="organizationCard-desc">
              <view class="organizationCard-desc-item">
                <view class="organizationCard-desc-item-image-box">
                  <image
                    src="@/static/icons/technology.png"
                    class="organizationCard-desc-item-image"
                  />
                  <view class="organizationCard-desc-item-title">
                    服务机构:
                    <view class="organizationCard-desc-item-text"
                      >怀来县司法局公证处</view
                    >
                  </view>
                </view>
                <view class="organizationCard-phone">
                  <view class="organizationCard-phone-item">
                    <text>联系人:</text>
                    <text class="organizationCard-phone-name">赵跃</text>
                  </view>
                  <view class="organizationCard-phone-item" @click="callPhone">
                    <text>联系电话：</text>
                    <text class="organizationCard-phone-number">
                      0313-6223396
                    </text>
                    <up-icon
                      name="phone-fill"
                      size="20"
                      color="#0345FA"
                    ></up-icon>
                  </view>
                </view>
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
              margin-bottom: 20rpx;
              .content-item-desc-item-image {
                width: 37rpx;
                height: 37rpx;
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
    }
  }
  ::v-deep .u-icon {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
