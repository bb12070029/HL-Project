<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="banner">
      <image
        src="@/static/images/financial/productDetailBanner.png"
        class="banner-image"
        mode="widthFix"
      />
    </view>
    <view class="content">
      <view class="content-info">
        <view class="content-info-title">产品基本信息</view>
        <view class="content-info-desc">
          <view class="content-info-desc-item">
            银行名称：中国银行怀来县支行
          </view>
          <view class="content-info-desc-item"> 产品名称：微捷贷 </view>
          <view class="content-info-desc-item">
            目标客户：小微企业、个体工商户
          </view>
          <view class="content-info-desc-item"> 最大额度：300万元 </view>
          <view class="content-info-desc-item"> 年化利率：4.35%起 </view>
          <view class="content-info-desc-item">
            担保方式：信用贷款，无需抵押
          </view>
          <view class="content-info-desc-item">
            用款方式：随借随还，按日计息
          </view>
        </view>
      </view>
      <view class="content-list">
        <view class="semicircle"></view>
        <view class="semicircleCard-title">准入标准</view>
        <view class="content-item">
          1.企业成立满2年，具有稳定的经营场所；
        </view>
        <view class="content-item"> 2.企业及法定代表人信用记录良好； </view>
        <view class="content-item"> 3.年营业收入不低于100万元； </view>
        <view class="content-item"> 4.具有稳定的经营现金流； </view>
        <view class="content-item">
          5.符合国家产业政策，无重大违法违规记录；
        </view>
      </view>
      <view class="content-list">
        <view class="semicircle"></view>
        <view class="semicircleCard-title">所需资料</view>
        <view class="content-item"> 1.企业营业执照、组织机构代码证； </view>
        <view class="content-item">2.法定代表人身份证； </view>
        <view class="content-item"> 3.近2年财务报表；</view>
        <view class="content-item"> 4.近6个月银行流水；</view>
        <view class="content-item"> 6.其他银行要求的补充材料； </view>
        <view class="content-item"> 4.近6个月银行流水；</view>
      </view>
      <view class="content-list">
        <view class="semicircle"></view>
        <view class="semicircleCard-title">办理流程</view>
        <view class="content-item"> 1.提交申请材料； </view>
        <view class="content-item">2.银行进行资质审核；</view>
        <view class="content-item">3.现场调查评估；</view>
        <view class="content-item">4.审批通过后签约；</view>
        <view class="content-item"> 5.放款到账； </view>
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
      @include semicircleCard;
      margin-top: 20rpx;
      .content-item {
        background-color: #f6f7f9;
        font-size: 24rpx;
        color: $text-color-light;
        line-height: 41rpx;
        padding: 30rpx;
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
