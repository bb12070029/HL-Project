<template>
  <view class="container">
    <!-- 头部横幅 -->
    <view class="header-banner">
      <video
        class="banner-bg"
        autoplay
        loop
        muted
        src="https://vdept3.bdstatic.com/mda-rfpzzitvdh9bza75/cae_h264/1750821649973318647/mda-rfpzzitvdh9bza75.mp4?v_from_s=hkapp-haokan-nanjing&auth_key=1752832173-0-0-c2749c80a78b1a2ff7e039d4c561c161&bcevod_channel=searchbox_feed&cr=0&cd=0&pd=1&pt=3&logid=2973419876&vid=3255999975165482622&klogid=2973419876&abtest="
      ></video>
      <view class="banner-content">
        <view class="main-title">河北沙城经济开发区企业服务驿站</view>
        <view class="subtitle">创新·协调·绿色·开放·共享</view>
      </view>
    </view>

    <!-- 服务网格 -->
    <view class="service-grid-container">
      <view class="service-grid">
        <view
          class="service-item"
          v-for="(service, index) in services"
          :key="index"
          @click="navigateToService(service)"
        >
          <view class="service-icon">
            <u-image width="111rpx" height="111rpx" :src="service.path" />
          </view>
          <view class="service-text">{{ service.name }}</view>
        </view>
      </view>
    </view>

    <!-- 园区动态 -->
    <view class="news-section">
      <view class="section-header">
        <text class="section-title">园区动态</text>
      </view>
      <view class="news-list">
        <view
          class="news-item"
          v-for="(news, index) in newsList"
          :key="index"
          @click="viewNewsDetail(news)"
        >
          <u-image
            class="news-icon"
            width="30rpx"
            height="28rpx"
            src="@/static/icons/title_icon2.png"
          />
          <view class="news-content">
            <view class="news-title">
              <text>{{ news.title }}</text>
            </view>
            <view class="news-date">
              {{ news.date }}
              <u-image
                width="26rpx"
                height="19rpx"
                src="@/static/icons/arrowRight.png"
              />
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import financialService from "@/static/images/index/financialService.png";
import techService from "@/static/images/index/science.png";
import resourceSharing from "@/static/images/index/resourceSharing.png";
import legalService from "@/static/images/index/legalService.png";
import investmentService from "@/static/images/index/projectInvestment.png";
import feedbackService from "@/static/images/index/demand.png";
import hrService from "@/static/images/index/HR.png";
import supervisionService from "@/static/images/index/businessSupervision.png";

// 响应式数据
const services = ref([
  {
    name: "金融服务",
    icon: "gold-coin-o",
    path: financialService,
    url: "/pages/financial/index",
  },
  {
    name: "科技申报",
    icon: "shop-o",
    path: techService,
    url: "/pages/technology/index",
  },
  {
    name: "资源共享",
    icon: "share-o",
    path: resourceSharing,
    url: "/pages/resourceSharing/index",
  },
  {
    name: "法律服务",
    icon: "balance-o",
    path: legalService,
    url: "/pages/legalService/index",
  },
  {
    name: "项目投资",
    icon: "chart-trending-o",
    path: investmentService,
    url: "/pages/projectInvestment/index",
  },
  {
    name: "诉求反映",
    icon: "search",
    path: feedbackService,
    url: "/pages/demand/index",
  },
  {
    name: "人力资源",
    icon: "friends-o",
    path: hrService,
    url: "/pages/humanResource/index",
  },
  {
    name: "营商监督",
    icon: "chart-trending-o",
    path: supervisionService,
    url: "/pages/businessSupervision/index",
  },
]);

const newsList = ref([
  {
    title: "河北沙城经济开发区2023年第四季度招商引资工作会议顺利召开",
    date: "2025-06-30",
    id: 1,
  },
  {
    title: "关于开展2024年度高新技术企业认定工作的通知",
    date: "2025-06-30",
    id: 2,
  },
  {
    title: "关于组织企业参加2024年京津冀产业协同发展论坛的通知",
    date: "2025-06-30",
    id: 3,
  },
]);

// 方法
const playVideo = () => {
  uni.showToast({
    title: "视频播放功能",
    icon: "none",
  });
};

const navigateToService = (service) => {
  // 根据服务类型跳转到对应页面
  if (service.url) {
    uni.navigateTo({
      url: service.url,
    });
  } else {
    uni.showToast({
      title: `暂未开放${service.name}`,
      icon: "none",
    });
  }
};

const viewNewsDetail = (news) => {
  uni.showToast({
    title: `查看${news.title}`,
    icon: "none",
  });
  // 这里可以添加新闻详情页面跳转逻辑
};
const goToUviewDemo = () => {
  uni.navigateTo({
    url: "/pages/test-image/test-image",
  });
};
</script>

<style lang="scss" scoped>
@import "@/static/style.scss";

.container {
  background: $bg-color;
}

/* 头部横幅 */
.header-banner {
  position: relative;
  height: 700rpx;
  overflow: hidden;

  .banner-bg {
    height: 700rpx;
    width: 100%;
  }
  .banner-content {
    position: absolute;
    width: 703rpx;
    height: 156rpx;
    bottom: 100rpx;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    padding: 40rpx;
    background-color: rgba(0, 0, 0, 0.5);
    color: $white;
    text-align: center;

    .main-title {
      font-size: 40rpx;
      font-weight: bold;
      line-height: 1.4;
      margin-bottom: 30rpx;
    }

    .subtitle {
      font-size: 30rpx;
    }
  }
}

/* 服务网格 */
.service-grid-container {
  position: relative;
  z-index: 3;
  background-color: $bg-color;
  border-radius: 44rpx;
  margin-top: -100rpx;

  .service-grid {
    padding: 40rpx 20rpx;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40rpx;

    .service-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50rpx 100rpx;
      border-radius: 28rpx;
      transition: all 0.3s ease;
      background-color: $white;

      &:active {
        background-color: #f5f5f5;
        transform: scale(0.95);
      }

      .service-icon {
        margin-bottom: 37rpx;
        width: 80rpx;
        height: 80rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f0f9ff;
        border-radius: 50;
      }

      .service-text {
        font-size: 30rpx;
        color: $text-color;
        text-align: center;
        font-weight: 500;
      }
    }
  }
}

/* 园区动态 */
.news-section {
  margin: 40rpx 20rpx;

  .section-header {
    display: flex;
    align-items: center;
    margin-bottom: 24rpx;

    .section-title {
      @include title-text;
    }
  }

  .news-list {
    background-color: $white;
    border-radius: 16rpx;
    overflow: hidden;
    box-shadow: 22rpx $shadow-light;

    ::v-deep .u-image {
      margin-right: 10rpx;
      margin-top: 5rpx;
    }
    .news-item {
      display: flex;
      align-items: top;
      justify-content: left;
      padding: 24rpx;
      border-bottom: 1rpx solid $border-color;
      transition: background-color 0.3s ease;

      &:last-child {
        border-bottom: none;
      }

      &:active {
        background-color: #f8f9fa;
      }

      .news-content {
        flex: 1;
        min-width: 0;

        .news-title {
          font-size: 28rpx;
          color: $text-color;
          line-height: 1.4;
          margin-bottom: 8rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          display: flex;
          justify-content: left;
        }

        .news-date {
          display: flex;
          justify-content: space-between;
          font-size: 24rpx;
          color: $text-color-light;
        }
      }

      .news-arrow {
        margin-left: 16rpx;
      }
    }
  }
}
</style>
