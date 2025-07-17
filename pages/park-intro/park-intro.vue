<template>
  <view class="container">
    <!-- 园区介绍 -->
    <view class="intro-section">
      <view class="section-header">
        <u-icon name="info-o" size="20" color="#1989fa" />
        <text class="section-title">园区介绍</text>
      </view>
      <view class="intro-content">
        <text class="intro-text">河北沙城经济开发区成立于1992年，是河北省首批省级开发区之一。园区总规划面积50平方公里，已开发面积30平方公里，形成了以装备制造、新材料、新能源、现代服务业为主导的产业体系。</text>
      </view>
    </view>

    <!-- 园区优势 -->
    <view class="advantages-section">
      <view class="section-header">
        <u-icon name="star-o" size="20" color="#1989fa" />
        <text class="section-title">园区优势</text>
      </view>
      <view class="advantages-grid">
        <view class="advantage-item" v-for="(advantage, index) in advantages" :key="index">
          <view class="advantage-icon">
            <u-icon :name="advantage.icon" size="32" color="#1989fa" />
          </view>
          <view class="advantage-title">{{ advantage.title }}</view>
          <view class="advantage-desc">{{ advantage.desc }}</view>
        </view>
      </view>
    </view>

    <!-- 联系方式 -->
    <view class="contact-section">
      <view class="section-header">
        <u-icon name="phone-o" size="20" color="#1989fa" />
        <text class="section-title">联系方式</text>
      </view>
      <view class="contact-list">
        <view class="contact-item" v-for="(contact, index) in contacts" :key="index">
          <view class="contact-icon">
            <u-icon :name="contact.icon" size="20" color="#1989fa" />
          </view>
          <view class="contact-info">
            <view class="contact-label">{{ contact.label }}</view>
            <view class="contact-value">{{ contact.value }}</view>
          </view>
        </view>
      </view>
    </view>

    <!-- 园区地图 -->
    <view class="map-section">
      <view class="section-header">
        <u-icon name="location-o" size="20" color="#1989fa" />
        <text class="section-title">园区位置</text>
      </view>
      <view class="map-container">
        <view class="map-placeholder">
          <u-icon name="location" size="16" color="#ff6b35" />
          <text class="map-text">河北省张家口市怀来县沙城镇</text>
        </view>
      </view>
    </view>

    <!-- 园区图片画廊 -->
    <view class="gallery-section">
      <view class="section-header">
        <u-icon name="photo-o" size="20" color="#1989fa" />
        <text class="section-title">园区风貌</text>
      </view>
      <view class="gallery-tabs">
        <view class="tab-item" 
          v-for="(category, index) in galleryCategories" 
          :key="index"
          :class="{ active: activeTab === index }"
          @click="activeTab = index"
        >
          {{ category.name }}
        </view>
      </view>
      <view class="gallery-content">
        <view class="gallery-grid">
          <view class="gallery-item" v-for="(image, index) in currentGalleryImages" :key="index">
            <u-image :src="image.src" width="100%" height="200rpx" mode="aspectFill" />
          </view>
        </view>
      </view>
    </view>

    <!-- 产业布局 -->
    <view class="industry-section">
      <view class="section-header">
        <u-icon name="cluster-o" size="20" color="#1989fa" />
        <text class="section-title">产业布局</text>
      </view>
      <view class="industry-list">
        <view class="industry-item" v-for="(industry, index) in industries" :key="index">
          <view class="industry-icon">
            <u-icon :name="industry.icon" size="24" color="#1989fa" />
          </view>
          <view class="industry-info">
            <view class="industry-name">{{ industry.name }}</view>
            <view class="industry-desc">{{ industry.desc }}</view>
          </view>
        </view>
      </view>
    </view>

    <!-- 生态环境 -->
    <view class="eco-section">
      <view class="section-header">
        <u-icon name="leaf-o" size="20" color="#1989fa" />
        <text class="section-title">生态环境</text>
      </view>
      <view class="eco-content">
        <text class="eco-text">园区坚持绿色发展理念，绿化覆盖率达到35%以上，空气质量优良天数超过300天，是河北省绿色园区示范单位。</text>
      </view>
    </view>

    <!-- 基础设施 -->
    <view class="infrastructure-section">
      <view class="section-header">
        <u-icon name="setting-o" size="20" color="#1989fa" />
        <text class="section-title">基础设施</text>
      </view>
      <view class="infrastructure-list">
        <view class="infrastructure-item" v-for="(item, index) in infrastructure" :key="index">
          <view class="infrastructure-icon">
            <u-icon :name="item.icon" size="20" color="#1989fa" />
          </view>
          <view class="infrastructure-info">
            <view class="infrastructure-name">{{ item.name }}</view>
            <view class="infrastructure-desc">{{ item.desc }}</view>
          </view>
        </view>
      </view>
    </view>

    <!-- 投资环境 -->
    <view class="investment-section">
      <view class="section-header">
        <u-icon name="home-o" size="20" color="#1989fa" />
        <text class="section-title">投资环境</text>
      </view>
      <view class="investment-content">
        <text class="investment-text">园区提供"一站式"服务，实行"保姆式"代办，为入驻企业提供从注册到投产的全流程服务支持。</text>
      </view>
    </view>

    <!-- 人才服务 -->
    <view class="talent-section">
      <view class="section-header">
        <u-icon name="friends-o" size="20" color="#1989fa" />
        <text class="section-title">人才服务</text>
      </view>
      <view class="talent-content">
        <text class="talent-text">园区设立人才服务中心，为高层次人才提供住房、子女入学、医疗保障等全方位服务，打造人才聚集高地。</text>
      </view>
    </view>

    <!-- 政策支持 -->
    <view class="policy-section">
      <view class="section-header">
        <u-icon name="shop-o" size="20" color="#1989fa" />
        <text class="section-title">政策支持</text>
      </view>
      <view class="policy-list">
        <view class="policy-item" v-for="(policy, index) in policies" :key="index">
          <view class="policy-title">{{ policy.title }}</view>
          <view class="policy-desc">{{ policy.desc }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

// 园区优势数据
const advantages = ref([
  {
    title: '区位优势',
    description: '地处京津冀协同发展核心区域，交通便利',
    icon: 'location-o'
  },
  {
    title: '政策优势',
    description: '享受国家级开发区优惠政策',
    icon: 'certificate-o'
  },
  {
    title: '产业优势',
    description: '形成完整的产业链条，配套完善',
    icon: 'cluster-o'
  },
  {
    title: '环境优势',
    description: '生态环境优美，宜居宜业',
    icon: 'leaf-o'
  }
])

// 联系方式数据
const contacts = ref([
  {
    label: '联系电话',
    value: '0313-12345678',
    icon: 'phone-o'
  },
  {
    label: '电子邮箱',
    value: 'service@shacheng.gov.cn',
    icon: 'envelop-o'
  },
  {
    label: '官方网站',
    value: 'www.shacheng.gov.cn',
    icon: 'globe-o'
  },
  {
    label: '地址',
    value: '河北省张家口市怀来县沙城镇',
    icon: 'location-o'
  }
])

// 园区风貌图片
const parkScenery = ref([
  { url: '/static/images/scenery1.jpg', title: '园区全景' },
  { url: '/static/images/scenery2.jpg', title: '办公大楼' },
  { url: '/static/images/scenery3.jpg', title: '绿化景观' },
  { url: '/static/images/scenery4.jpg', title: '道路建设' },
  { url: '/static/images/scenery5.jpg', title: '夜景照明' },
  { url: '/static/images/scenery6.jpg', title: '园区入口' }
])

// 产业发展图片
const industrialDev = ref([
  { url: '/static/images/industry1.jpg', title: '智能制造' },
  { url: '/static/images/industry2.jpg', title: '科技创新' },
  { url: '/static/images/industry3.jpg', title: '产业园区' },
  { url: '/static/images/industry4.jpg', title: '研发中心' },
  { url: '/static/images/industry5.jpg', title: '生产基地' },
  { url: '/static/images/industry6.jpg', title: '技术展示' }
])

// 生态环境图片
const ecoEnvironment = ref([
  { url: '/static/images/eco1.jpg', title: '绿色园区' },
  { url: '/static/images/eco2.jpg', title: '生态景观' },
  { url: '/static/images/eco3.jpg', title: '环保设施' },
  { url: '/static/images/eco4.jpg', title: '绿化带' },
  { url: '/static/images/eco5.jpg', title: '水系景观' },
  { url: '/static/images/eco6.jpg', title: '生态公园' }
])

// 基础设施图片
const infrastructure = ref([
  { url: '/static/images/infra1.jpg', title: '道路网络' },
  { url: '/static/images/infra2.jpg', title: '桥梁建设' },
  { url: '/static/images/infra3.jpg', title: '供水系统' },
  { url: '/static/images/infra4.jpg', title: '电力设施' },
  { url: '/static/images/infra5.jpg', title: '通信网络' },
  { url: '/static/images/infra6.jpg', title: '物流中心' }
])

// 人才公寓图片
const talentApartments = ref([
  { url: '/static/images/apartment1.jpg', title: '公寓外观' },
  { url: '/static/images/apartment2.jpg', title: '室内装修' },
  { url: '/static/images/apartment3.jpg', title: '配套设施' },
  { url: '/static/images/apartment4.jpg', title: '休闲区域' },
  { url: '/static/images/apartment5.jpg', title: '健身设施' },
  { url: '/static/images/apartment6.jpg', title: '社区环境' }
])

// 招商引资图片
const investmentPromotion = ref([
  { url: '/static/images/invest1.jpg', title: '招商会议' },
  { url: '/static/images/invest2.jpg', title: '项目签约' },
  { url: '/static/images/invest3.jpg', title: '企业考察' },
  { url: '/static/images/invest4.jpg', title: '投资洽谈' },
  { url: '/static/images/invest5.jpg', title: '政策宣讲' },
  { url: '/static/images/invest6.jpg', title: '合作交流' }
])

// 企业风采图片
const enterpriseStyle = ref([
  { url: '/static/images/enterprise1.jpg', title: '企业A' },
  { url: '/static/images/enterprise2.jpg', title: '企业B' },
  { url: '/static/images/enterprise3.jpg', title: '企业C' },
  { url: '/static/images/enterprise4.jpg', title: '企业D' },
  { url: '/static/images/enterprise5.jpg', title: '企业E' },
  { url: '/static/images/enterprise6.jpg', title: '企业F' },
  { url: '/static/images/enterprise7.jpg', title: '企业G' },
  { url: '/static/images/enterprise8.jpg', title: '企业H' },
  { url: '/static/images/enterprise9.jpg', title: '企业I' },
  { url: '/static/images/enterprise10.jpg', title: '企业J' },
  { url: '/static/images/enterprise11.jpg', title: '企业K' },
  { url: '/static/images/enterprise12.jpg', title: '企业L' }
])

// 预览图片
const previewImage = (image) => {
  uni.previewImage({
    urls: [image.url],
    current: image.url
  })
}
</script>

<style scoped>
.container {
  padding: 20rpx;
  background-color: #f7f8fa;
  min-height: 100vh;
}

/* 通用section样式 */
.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 24rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333333;
  margin-left: 12rpx;
}

/* 园区简介 */
.intro-section {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
}

.intro-text {
  font-size: 28rpx;
  color: #666666;
  line-height: 1.6;
}

/* 园区优势 */
.advantages-section {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24rpx;
}

.advantage-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20rpx;
  background-color: #f8f9fa;
  border-radius: 12rpx;
}

.advantage-icon {
  margin-bottom: 12rpx;
}

.advantage-title {
  font-size: 28rpx;
  font-weight: 500;
  color: #333333;
  margin-bottom: 8rpx;
}

.advantage-desc {
  font-size: 24rpx;
  color: #666666;
  line-height: 1.4;
}

/* 联系方式 */
.contact-section {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 16rpx;
  background-color: #f8f9fa;
  border-radius: 12rpx;
}

.contact-content {
  margin-left: 12rpx;
  flex: 1;
}

.contact-label {
  font-size: 24rpx;
  color: #999999;
  margin-bottom: 4rpx;
}

.contact-value {
  font-size: 26rpx;
  color: #333333;
  font-weight: 500;
}

/* 园区地图 */
.map-section {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
}

.map-container {
  position: relative;
  height: 300rpx;
  border-radius: 12rpx;
  overflow: hidden;
}

.map-image {
  width: 100%;
  height: 100%;
}

.map-overlay {
  position: absolute;
  bottom: 20rpx;
  left: 20rpx;
  right: 20rpx;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8rpx;
  padding: 16rpx;
  display: flex;
  align-items: center;
}

.map-marker {
  margin-right: 12rpx;
}

.map-info {
  flex: 1;
}

.map-title {
  font-size: 26rpx;
  font-weight: bold;
  color: #333333;
  display: block;
  margin-bottom: 4rpx;
}

.map-address {
  font-size: 24rpx;
  color: #666666;
  display: block;
}

/* 图片画廊 */
.gallery-section {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12rpx;
}

.image-grid.large-grid {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

.image-item {
  aspect-ratio: 1;
  border-radius: 8rpx;
  overflow: hidden;
  background-color: #f0f0f0;
}

.gallery-image {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}

.image-item:active .gallery-image {
  transform: scale(1.05);
}
</style> 