<template>
  <view class="container">
    <view class="content">
      <view class="content-header">
        <u--input
          placeholder="搜索企业"
          prefixIcon="search"
          prefixIconStyle="font-size: 22px;color: #909399"
        ></u--input>
        <u-tabs :list="tabsList" @click="tabClick"></u-tabs>
      </view>
      <view class="content-list">
        <view class="content-item" @click="navigateToDetail">
          <image
            src="@/static/images/resourceSharing/businessListImg.png"
            class="content-item-image"
          />
          <view class="content-item-desc">
            <view class="content-item-desc-title">河北智能制造有限公司</view>
            <view class="content-item-desc-text"
              >千工业自动化设备研发与生产，是园区重点高新技术企业。千工业自动化设备研发与生产，是园区重点高新技术企业。</view
            >
          </view>
        </view>
        <view class="content-item">
          <image
            src="@/static/images/resourceSharing/businessListImg.png"
            class="content-item-image"
          />
          <view class="content-item-desc">
            <view class="content-item-desc-title">河北智能制造有限公司</view>
            <view class="content-item-desc-text"
              >千工业自动化设备研发与生产，是园区重点高新技术企业。千工业自动化设备研发与生产，是园区重点高新技术企业。</view
            >
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { ref } from "vue";
const tabsList = ref([
  {
    name: "全部",
    id: 0,
  },
  {
    name: "制造业",
    id: 1,
  },
  {
    name: "服务业",
    id: 2,
  },
  {
    name: "科技业",
    id: 3,
  },
]);
const tabClick = (index) => {
  console.log(index);
};
const navigateToDetail = () => {
  uni.navigateTo({
    url: "/pages/resourceSharing/businessDetail",
  });
};
</script>
<style lang="scss" scoped>
@import "@/static/style.scss";
.container {
  background-color: $bg-color;
  .content {
    padding: 30rpx;
    .content-list {
      margin-top: 20rpx;
      .content-item {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 10rpx;
        background: $white;
        padding: 35rpx 30rpx;
        margin-bottom: 20rpx;
        .content-item-image {
          width: 223rpx;
          height: 133rpx;
          border-radius: 10rpx;
          margin-right: 20rpx;
        }
        .content-item-desc {
          width: calc(100% - 223rpx - 20rpx);
          .content-item-desc-title {
            font-size: 28rpx;
            color: #000000;
            line-height: 47rpx;
            margin-bottom: 10rpx;
          }
          .content-item-desc-text {
            font-size: 20rpx;
            color: $text-color-light;
            line-height: 41rpx;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* 限制显示的行数 */
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>
