<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="banner">
      <image
        src="@/static/images/resourceSharing/businessListImg.png"
        class="banner-image"
        mode="widthFix"
      />
    </view>
    <view class="content">
      <view class="content-header">
        <view class="content-title">河北智能制造有限公司</view>
        <view class="content-desc">高新技术企业 · 园区明星企业 </view>
        <view class="content-statistics">
          <view class="content-statistics-item">
            <view class="content-statistics-item-title">2014年</view>
            <view class="content-statistics-item-text">成立时间</view>
          </view>
          <view class="verticalLine"></view>
          <view class="content-statistics-item">
            <view class="content-statistics-item-title">300+</view>
            <view class="content-statistics-item-text">员工规模</view>
          </view>
          <view class="verticalLine"></view>
          <view class="content-statistics-item">
            <view class="content-statistics-item-title">1.5亿</view>
            <view class="content-statistics-item-text">生产值</view>
          </view>
        </view>
      </view>
      <view class="content-list">
        <view class="content-item content-item2">
          <text class="title">企业简介</text>
          <view class="content-item-desc">
            河北智能制造有限公司成立于2014年，是一家专注于工业自动化设备研发与生产的高新技术企业。公司位于怀来县经济开发区核心区域，占地面积2万平方米，拥有现代化生产厂房和研发中心。
            公司主要从事工业机器人、自动化生产线、智能控制系统等产品的研发、设计、制造与销售，为制造业客户提供智能化升级解决方案。目前已获得多项国家专利，是河北省"专精特新"中小企业和怀来县重点扶持企业。
          </view>
        </view>
      </view>
      <view class="productAndService">
        <text class="title">主要产品与服务</text>
        <view class="productAndServicelist">
          <view class="productAndService-item">
            <image
              src="@/static/images/resourceSharing/businessListImg.png"
              class="productAndService-image"
              mode="widthFix"
            />
            <view class="productAndService-item-desc">
              <view class="productAndService-item-title">工业机器人</view>
              <view class="productAndService-item-text"
                >多轴协作机器人，适用于精密制造、物料搬运等场景
              </view>
            </view>
          </view>
          <view class="productAndService-item">
            <image
              src="@/static/images/businessSupervision/icon.png"
              class="productAndService-image"
              mode="widthFix"
            />
            <view class="productAndService-item-desc">
              <view class="productAndService-item-title">工业机器人</view>
              <view class="productAndService-item-text"
                >多轴协作机器人，适用于精密制造、物料搬运等场景用于精密制造、物料搬运等场用于精密制造、物料搬运等场用于精密制造、物料搬运等场
              </view>
            </view>
          </view>
          <view class="productAndService-item">
            <image
              src="@/static/images/businessSupervision/icon.png"
              class="productAndService-image"
              mode="widthFix"
            />
            <view class="productAndService-item-desc">
              <view class="productAndService-item-title">工业机器人</view>
              <view class="productAndService-item-text"
                >多轴协作机器人，适用于精密制造、物料搬运等场景
              </view>
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
              src="@/static/images/businessSupervision/icon3.png"
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
              src="@/static/images/businessSupervision/icon4.png"
              class="number-box-image"
            />
            <view class="number-box-item-text"
              >邮箱：contact@hbzhineng.com
            </view>
          </view>
          <view class="number-box-item">
            <image
              src="@/static/images/businessSupervision/icon2.png"
              class="number-box-image"
            />
            <view class="number-box-item-text"
              >地址：怀来县沙城经济开发区智造产业园B区12号</view
            >
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
    padding: 30rpx;
    position: absolute;
    top: 300rpx;
    left: 0;
    right: 0;
    bottom: 0;
    .content-header {
      height: 300rpx;
      padding: 43rpx 80rpx;
      border-radius: 18rpx;
      background-color: $white;
      .content-title {
        color: $text-color;
        font-size: 40rpx;
      }
      .content-desc {
        font-size: 26rpx;
        color: $text-color-light;
        text-align: left;
        line-height: 41rpx;
      }
      .content-statistics {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 50rpx;
        padding-bottom: 50rpx;
        text-align: center;
        .verticalLine {
          width: 1rpx;
          height: 70rpx;
          background-color: #e6e6e6;
          margin: 0 20rpx;
        }
        .content-statistics-item {
          .content-statistics-item-title {
            font-size: 42rpx;
            color: $link-color;
            line-height: 41rpx;
            font-weight: bold;
            margin-bottom: 10rpx;
          }
          .content-statistics-item-text {
            font-size: 26rpx;
            color: $text-color-light;
            line-height: 41rpx;
          }
        }
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
          padding: 0;
        }
        .content-item-image {
          width: 100%;
          height: 314rpx;
          border-radius: 10rpx;
        }
        .content-item-desc {
          font-size: 26rpx;
          color: $text-color-light;
          line-height: 41rpx;
        }
      }
      .content-item2 {
        @include organizationCard;
      }
    }
    .productAndService {
      background: $white;
      border-radius: 18rpx;
      padding: 40rpx;
      margin-bottom: 40rpx;
      .title {
        @include title-text;
        margin-bottom: 20rpx;
        padding: 0;
      }
      .productAndServicelist {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .productAndService-item {
          width: calc(50% - 20rpx);
          margin-bottom: 20rpx;
          box-shadow: 0 0 10rpx 0 rgba(0, 0, 0, 0.1);
          border-radius: 10rpx;
          .productAndService-image {
            width: 100%;
            height: 125rpx;
            border-radius: 10rpx 10rpx 0 0;
          }
          .productAndService-item-desc {
            padding: 20rpx;
            .productAndService-item-title {
              font-size: 26rpx;
              color: $text-color;
              line-height: 41rpx;
              margin-bottom: 10rpx;
            }
            .productAndService-item-text {
              font-size: 24rpx;
              color: $text-color-light;
              line-height: 40rpx;
              display: -webkit-box;
              -webkit-line-clamp: 3; /* 限制显示的行数 */
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
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
