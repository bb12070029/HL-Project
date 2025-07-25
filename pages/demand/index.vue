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
        <view class="content-title">诉求反映</view>
        <view class="content-desc"
          >为畅通政企沟通渠道，切实解决企业发展中遇到的痛点、堵点问题，通过建立标准化、规范化、透明化的问题处理机制，实现企业诉求"有呼必应、接诉即办"，持续优化营商环境。
        </view>
      </view>
      <view class="content-list">
        <view class="content-item content-item2">
          <view class="semicircle"></view>
          <text class="semicircleCard-title">服务渠道</text>
          <view class="content-item-towBox">
            <view class="content-item-towBox-box">
              <image
                src="@/static/images/demand/serverBg.png"
                class="background-image"
              />
              <view class="content-item-towBox-box-content">
                <view class="content-item-towBox-item-title">线上提交 </view>
                <view class="content-item-towBox-item-text">
                  在线提交诉求实时跟踪处理进度
                </view>
                <view class="content-item-towBox-item-btn" @click="toSubmitDemand">立即提交</view>
              </view>
            </view>
            <view class="content-item-towBox-box">
              <image
                src="@/static/images/demand/serverBg.png"
                class="background-image"
              />
              <view class="content-item-towBox-box-content">
                <view class="content-item-towBox-item-title">服务专线 </view>
                <view class="content-item-towBox-item-text">
                  工作日
                  <view class="content-item-towBox-item-desc">8:30-17:30</view>
                </view>
                <view class="content-item-towBox-item-btn">0313-6809888</view>
              </view>
            </view>
          </view>
          <view class="content-item-desc">
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                <image
                  src="@/static/images/demand/icon.png"
                  class="content-item-desc-item-image"
                />
                线下窗口
              </view>
              <view class="content-item-desc-item-text">
                各园区企业服务驿站"意见箱"，您可以前往园区内任一服务驿站提交书面诉求
              </view>
            </view>
          </view>
        </view>
        <view class="content-item content-item2">
          <view class="semicircle"></view>
          <text class="semicircleCard-title">处理流程 </text>
          <view class="flowList">
            <view class="flowBox-item">
              <view class="flowBox-item-number">
                01
                <image
                  src="@/static/images/demand/numBg.png"
                  mode="aspectFit"
                  class="flowBox-item-image"
                />
              </view>
              <view class="flowBox-item-content">
                <view class="flowBox-item-title">提交诉求</view>
                <view class="flowBox-item-text">
                  通过线上或线下渠道提交诉求
                </view>
              </view>
            </view>
            <view class="flowBox-item">
              <view class="flowBox-item-number">
                02
                <image
                  src="@/static/images/demand/numBg.png"
                  mode="aspectFit"
                  class="flowBox-item-image"
                />
              </view>
              <view class="flowBox-item-content">
                <view class="flowBox-item-title">分办</view>
                <view class="flowBox-item-text">
                  1个工作日内分办至相关责任部门
                </view>
              </view>
            </view>
            <view class="flowBox-item">
              <view class="flowBox-item-number">
                03
                <image
                  src="@/static/images/demand/numBg.png"
                  mode="aspectFit"
                  class="flowBox-item-image"
                />
              </view>
              <view class="flowBox-item-content">
                <view class="flowBox-item-title">响应 </view>
                <view class="flowBox-item-text"> 责任单位3日内响应 </view>
              </view>
            </view>
            <view class="flowBox-item">
              <view class="flowBox-item-number">
                04
                <image
                  src="@/static/images/demand/numBg.png"
                  mode="aspectFit"
                  class="flowBox-item-image"
                />
              </view>
              <view class="flowBox-item-content">
                <view class="flowBox-item-title">提交诉求</view>
                <view class="flowBox-item-text">
                  一般问题7日内办结，复杂问题15日限期办理
                </view>
              </view>
            </view>
            <view class="flowBox-item">
              <view class="flowBox-item-number">
                05
                <image
                  src="@/static/images/demand/numBg.png"
                  mode="aspectFit"
                  class="flowBox-item-image"
                />
              </view>
              <view class="flowBox-item-content">
                <view class="flowBox-item-title">回访 </view>
                <view class="flowBox-item-text"> 满意度回访 </view>
              </view>
            </view>
          </view>
        </view>
        <view class="content-item content-item2">
          <view class="semicircle"></view>
          <text class="semicircleCard-title">注意事项</text>
          <view class="content-item-tips">
            <image
              src="@/static/images/demand/yellowIcon.png"
              class="content-item-desc-image"
            />
            <view class="content-item-tips-item">
              <view class="content-item-tips-item-text">
                请如实填写企业名称、联系人及联系方式
              </view>
            </view>
          </view>
          <view class="content-item-tips">
            <image
              src="@/static/images/demand/yellowIcon.png"
              class="content-item-desc-image"
            />
            <view class="content-item-tips-item">
              <view class="content-item-tips-item-text">
                同一事项请勿重复提交
              </view>
            </view>
          </view>
          <view class="content-item-tips content-item-tips-last">
            <image
              src="@/static/images/demand/yellowIcon.png"
              class="content-item-desc-image"
            />
            <view class="content-item-tips-item">
              <view class="content-item-tips-item-title"
                >下列事项不予受理：
              </view>
              <view class="content-item-tips-item-text">
                <image
                  src="@/static/images/demand/redIcon.png"
                  class="content-item-tips-item-text-image"
                />
                已进入司法程序或信访程序  
              </view>
              <view class="content-item-tips-item-text">
                <image
                  src="@/static/images/demand/redIcon.png"
                  class="content-item-tips-item-text-image"
                />
                涉及商业秘密、个人隐私且未授权   
              </view>
              <view class="content-item-tips-item-text">
                <image
                  src="@/static/images/demand/redIcon.png"
                  class="content-item-tips-item-text-image"
                />
                内容空泛无具体诉求事项   
              </view>
            </view>
          </view>
        </view>
      </view>
      <!-- 风险提示 -->
      <view class="risk-warning">
        <image
          src="@/static/images/demand/tips.png"
          class="risk-warning-bg"
          mode="widthFix"
        />
        <view class="risk-warning-content">
          <view class="risk-warning-title">
            <image
              src="@/static/images/demand/tipsIcon.png"
              class="risk-warning-title-image"
            />
            <text class="risk-warning-title-text">温馨</text>提示
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

const toSubmitDemand = () => {
  uni.navigateTo({
    url: "/pages/demand/submitDemand",
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
        .content-item-tips {
          width: 100%;
          display: flex;
          align-items: center;
          .content-item-desc-image {
            width: 31rpx;
            height: 27rpx;
            margin: 0 20rpx 20rpx 0;
          }
          .content-item-tips-item {
            width: 100%;
            font-size: 24rpx;
            color: $text-color-light;
            border-radius: 10rpx;
            margin-bottom: 23rpx;
            padding: 24rpx 20rpx;
            background-color: #f6f7f9;
            .content-item-tips-item-text {
              width: 100%;
              font-size: 24rpx;
              color: $text-color-light;
            }
          }
        }
        .content-item-tips-last {
          .content-item-tips-item-title {
            font-size: 24rpx;
            color: #000000;
            margin-bottom: 20rpx;
          }
          .content-item-tips-item {
            background-color: #FFF8F9;
            margin-bottom: 20rpx;
            .content-item-tips-item-text {
              display: flex;
              align-items: center;
              color: #d20000;
              margin-bottom: 10rpx;
              .content-item-tips-item-text-image {
                width: 23rpx;
                height: 23rpx;
                margin-right: 20rpx;
              }
            }
          }
        }
      }
      .content-item2 {
        @include organizationCard;
      }
      .content-item-towBox {
        display: flex;
        justify-content: space-around;
        .content-item-towBox-box {
          width: 310rpx;
          height: 253rpx;
          position: relative;
          margin-bottom: 40rpx;
          margin-right: 20rpx;
          .background-image {
            width: 100%;
            height: 100%;
          }
          .content-item-towBox-box-content {
            position: absolute;
            top: 0;
            left: 0;
            padding: 35rpx 20rpx;
            .content-item-towBox-item-title {
              font-size: 30rpx;
              margin-bottom: 30rpx;
            }
            .content-item-towBox-item-text {
              font-size: 22rpx;
              color: $text-color-light;
              margin-bottom: 30rpx;
              .content-item-towBox-item-desc {
                color: #000;
                margin-top: 10rpx;
              }
            }
            .content-item-towBox-item-btn {
              font-size: 22rpx;
              color: $link-color;
            }
          }
        }
      }
      .flowList {
        position: relative;
        .flowBox-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 40rpx;
          position: relative;

          &:not(:last-child)::after {
            content: "";
            position: absolute;
            left: 22rpx;
            top: 93rpx;
            width: 2rpx;
            height: 100rpx;
            background-image: url("@/static/images/demand/line.png");
            background-repeat: no-repeat;
            background-size: contain;
            z-index: 1;
          }

          .flowBox-item-number {
            position: relative;
            width: 43rpx;
            height: 43rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24rpx;
            font-weight: bold;
            color: #fff;
            margin: 43rpx 20rpx 0 0;
            z-index: 2;

            .flowBox-item-image {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
            }
          }

          .flowBox-item-content {
            flex: 1;
            background: #f6f7f9;
            border-radius: 10rpx;
            padding: 20rpx 35rpx;

            .flowBox-item-title {
              font-size: 28rpx;
              font-weight: bold;
              color: #333;
              margin-bottom: 10rpx;
            }

            .flowBox-item-text {
              font-size: 24rpx;
              color: #666;
              line-height: 1.5;
            }
          }
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
            color: #FF8900;
          }
          .risk-warning-title-image {
            width: 35rpx;
            height: 43rpx;
            margin-right: 15rpx;
            vertical-align: top;
          }
        }
        .risk-warning-desc {
          font-size: 24rpx;
          color: $text-color;
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
