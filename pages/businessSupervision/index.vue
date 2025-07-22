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
      <image
        src="@/static/images/businessSupervision/banner.png"
        class="content-image"
      />
      <view class="content-header">
        <view class="content-title">营商环境监督举报公告</view>
        <view class="content-desc"
          >为深入贯彻落实省市县优化营商环境会议精神，
          以铁的纪律护航全县营商环境更好更优，畅通信访举报渠道，依纪依法受理信访举报，及时发现问题线索，现公告如下：
        </view>
      </view>
      <view class="content-list">
        <view class="content-item content-item2">
          <text class="title">受理范围</text>
          <view class="content-item-desc">
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                <view class="leftLine"></view>
                党员、党组织违纪行为：
              </view>
              <view class="content-item-desc-item-text">
                在优化营商环境工作中，党员、党组织回应群众诉求疲沓应付、敷衍塞责，办理群众事项推诿扯皮、久拖不办，解决群众难题私设门槛、吃拿卡要，对待群众口大气粗、颐指气使等违反党的纪律行为。
              </view>
            </view>
            <view class="content-item-desc-item">
              <view class="content-item-desc-item-title">
                <view class="leftLine"></view>
                监察对象职务违法犯罪行为：
              </view>
              <view class="content-item-desc-item-text">
                监察对象不依法履职，滥用职权、徇私枉法，招投标走过场、人为干预、串通勾结、围标串标，违规审批、违规执法、超标查扣以及乱收费、乱罚款、乱摊派等扰乱市场主体正常生产经营等职务违法犯罪行为。
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="number-box">
        <text class="title">不予受理范围</text>
        <view class="number-box-list number-box-list-blue">
          <view class="number-box-item">
            <image
              src="@/static/images/businessSupervision/icon.png"
              class="number-box-image"
            />
            <view class="number-box-item-text"
              >已经或者依法应当通过诉讼、仲裁、行政裁决、行政复议等途径解决的。
            </view>
          </view>
          <view class="number-box-item">
            <image
              src="@/static/images/businessSupervision/icon.png"
              class="number-box-image"
            />
            <view class="number-box-item-text">
              依照有关规定，属于其他机关或者单位职责范围的。
            </view>
          </view>
          <view class="number-box-item">
            <image
              src="@/static/images/businessSupervision/icon.png"
              class="number-box-image"
            />
            <view class="number-box-item-text"
              >仅列举出违纪或者职务违法、职务犯罪行为名 称但无实质内容的。
            </view>
          </view>
        </view>
      </view>
      <view class="number-box">
        <text class="title">举报方式</text>
        <view class="number-box-list">
          <view class="number-box-item">
            <image
              src="@/static/images/businessSupervision/icon1.png"
              class="number-box-image"
            />
            <view class="number-box-item-text"
              >来信地址： 怀来县沙城镇隆兴路沙城经济开发区</view
            >
          </view>
          <view class="number-box-item">
            <image
              src="@/static/images/businessSupervision/icon2.png"
              class="number-box-image"
            />
            <view class="number-box-item-text">邮编：075400</view>
          </view>
          <view class="number-box-item">
            <image
              src="@/static/images/businessSupervision/icon2.png"
              class="number-box-image"
            />
            <view class="number-box-item-text"
              >来访地址： 河北沙城经济开发区纪检监察工委办公室举报</view
            >
          </view>
          <view class="number-box-item">
            <image
              src="@/static/images/businessSupervision/icon3.png"
              class="number-box-image"
            />
            <view class="number-box-item-text">
              电话：<text class="callNumber" @click="callPhone('0313-6809869')"
                >0313-6809869 拨打
              </text>
            </view>
          </view>
          <view class="number-box-item">
            <image
              src="@/static/images/businessSupervision/icon4.png"
              class="number-box-image"
            />
            <view class="number-box-item-text"
              >举报邮箱： hbscjjkfqq@163.com
            </view>
          </view>
          <view class="number-box-item">
            <image
              src="@/static/images/businessSupervision/icon1.png"
              class="number-box-image"
            />
            <view class="number-box-item-text"
              >举报信箱： 河北沙城经济开发区一楼大厅门口
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
  console.log(number);
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
    position: relative;
    padding: 30rpx;
    .content-image {
      width: 100%;
      height: 335rpx;
      border-radius: 10rpx;
    }
    .content-header {
      height: 300rpx;
      position: absolute;
      top: 20rpx;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 43rpx 80rpx;
      border-radius: 18rpx;
      //   background-color: $white;
      text-align: center;
      .content-title {
        margin-bottom: 80rpx;
        color: $white;
      }
      .content-desc {
        font-size: 24rpx;
        color: $text-color;
        text-align: left;
        line-height: 41rpx;
      }
    }
    .content-list {
      margin-top: 20rpx;
      position: relative;
      margin-bottom: 40rpx;
      padding: 40rpx;
      overflow: hidden;
      background-color: $white;
      border-radius: 18rpx;
      .content-item {
        .title {
          @include title-text;
          margin-bottom: 20rpx;
        }
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
              color: $text-color;
              margin-bottom: 10rpx;
              .leftLine {
                @include leftLine;
              }
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
    }
    .number-box {
      background: $white;
      border-radius: 18rpx;
      padding: 40rpx;
      margin-bottom: 40rpx;
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
          align-items: top;
          padding: 10rpx 0;

          .number-box-image {
            width: 22rpx;
            height: 22rpx;
            margin-top: 10rpx;
          }
          .number-box-item-text {
            width: calc(100% - 27rpx);
            margin-left: 20rpx;
          }
          .callNumber {
            color: $link-color;
          }
        }
      }
      .number-box-list-blue {
        background: none;
        padding: 0;
        .number-box-item {
          padding: 20rpx 30rpx;
          background-color: #f2f3fd;
          color: $link-color;
          border-radius: 10rpx;
          margin-bottom: 10rpx;
          .number-box-image {
            width: 27rpx;
            height: 27rpx;
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
