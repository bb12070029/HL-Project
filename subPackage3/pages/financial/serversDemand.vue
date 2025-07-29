<template>
  <view class="container">
    <!-- 页面标题 -->
    <!-- <view class="banner">
        <image
          src="@/subPackage3/static/financial/banner.png"
          class="banner-image"
          mode="widthFix"
        />
      </view> -->
    <view class="content">
      <view class="content-header">
        <view class="content-title">企业融资服务需求</view>
        <view class="content-desc"
          >请填写以下表单，提交您企业的融资服务需求。我们将根据您的需求，为您匹配最适合的金融产品和服务机构。
        </view>
      </view>
      <view class="content-form">
        <view class="content-form-title">受理范围</view>
        <up-form
          labelPosition="top"
          :model="model1"
          :rules="rules"
          ref="formRef"
          labelWidth="120"
        >
          <up-form-item
            label="企业名称"
            prop="userInfo.name"
            :borderBottom="true"
            ref="item1"
          >
            <up-input
              v-model="model1.userInfo.name"
              placeholder="企业名称(必填)"
              border="none"
            ></up-input>
          </up-form-item>
          <up-form-item
            label="联系人姓名"
            prop="userInfo.name"
            :borderBottom="true"
            ref="item1"
          >
            <up-input
              v-model="model1.userInfo.name"
              placeholder="联系人姓名(必填)"
              border="none"
            ></up-input>
          </up-form-item>
          <up-form-item
            label="联系电话"
            prop="userInfo.name"
            :borderBottom="true"
            ref="item1"
          >
            <up-input
              v-model="model1.userInfo.name"
              placeholder="联系电话(必填)"
              border="none"
            ></up-input>
          </up-form-item>
          <up-form-item
            label="融资金额"
            prop="userInfo.sex"
            :borderBottom="true"
            @click="
              showSheet = true;
              actions = money;
              hideKeyboard('请选择融资金额');
            "
            ref="item1"
          >
            <up-input
              v-model="model1.userInfo.sex"
              disabled
              disabledColor="#ffffff"
              placeholder="融资金额(必填)"
              border="none"
            ></up-input>
            <template #right>
              <up-icon name="arrow-right"></up-icon>
            </template>
          </up-form-item>
          <up-form-item
            label="融资用途"
            prop="userInfo.sex"
            :borderBottom="true"
            @click="
              showSheet = true;
              actions = use;
              hideKeyboard('请选择融资用途');
            "
            ref="item1"
          >
            <up-input
              v-model="model1.userInfo.sex"
              disabled
              disabledColor="#ffffff"
              placeholder="融资金额(必填)"
              border="none"
            ></up-input>
            <template #right>
              <up-icon name="arrow-right"></up-icon>
            </template>
          </up-form-item>
          <up-form-item
            label="融资期限"
            prop="userInfo.sex"
            :borderBottom="true"
            @click="
              showSheet = true;
              actions = timeLimit;
              hideKeyboard('请选择融资期限');
            "
            ref="item1"
          >
            <up-input
              v-model="model1.userInfo.sex"
              disabled
              disabledColor="#ffffff"
              placeholder="融资期限(必填)"
              border="none"
            ></up-input>
            <template #right>
              <up-icon name="arrow-right"></up-icon>
            </template>
          </up-form-item>
          <up-form-item
            label="担保方式"
            prop="userInfo.sex"
            :borderBottom="true"
            @click="
              showSheet = true;
              actions = guarantee;
              hideKeyboard('请选择担保方式');
            "
            ref="item1"
          >
            <up-input
              v-model="model1.userInfo.sex"
              disabled
              disabledColor="#ffffff"
              placeholder="担保方式(必填)"
              border="none"
            ></up-input>
            <template #right>
              <up-icon name="arrow-right"></up-icon>
            </template>
          </up-form-item>
          <up-form-item
            label="其他要求"
            prop="userInfo.sex"
            :borderBottom="true"
            ref="item1"
          >
            <up-textarea
              v-model="model1.userInfo.sex"
              border="none"
              maxlength="200"
              placeholder="请详细描述您的融资需求、企业经营情况等信息，以便我们更好地为您提供服务"
            ></up-textarea>
          </up-form-item>
          <view class="content-form-button">
            <up-button type="primary" color="#0345fa" @click="submit">提交需求</up-button>
          </view>
        </up-form>
        <up-action-sheet
          :show="showSheet"
          :actions="actions"
          :title="sheetTitle"
          @close="showSheet = false"
          @select="sexSelect"
        >
        </up-action-sheet>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive } from "vue";

const model1 = reactive({
  userInfo: {
    name: "",
    sex: "",
  },
});
const rules = ref({
  userInfo: {
    name: [{ required: true, message: "请输入企业名称", trigger: "blur" }],
    sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
  },
});

// 使用 ref 创建响应式引用
const formRef = ref(null);

// 定义方法
function sexSelect(e) {
  model1.userInfo.sex = e.name;
  if (formRef.value) {
    formRef.value.validateField("userInfo.sex");
  }
}
const actions = ref([]);
const money = ref([
  {
    name: "100-500万元",
    value: "100-500",
  },
  {
    name: "500-1000万元",
    value: "500-1000",
  },
  {
    name: "1000-2000万元",
    value: "1000-2000",
  },
  {
    name: "2000-5000万元",
    value: "2000-5000",
  },
  {
    name: "5000万元以上",
    value: "5000",
  },
]);
const use = ref([
  {
    name: "补充运营资金",
    value: "补充运营资金",
  },
  {
    name: "设备购置更新",
    value: "设备购置更新",
  },
  {
    name: "技术研发投入",
    value: "技术研发投入",
  },
  {
    name: "厂房建设扩产",
    value: "厂房建设扩产",
  },
  {
    name: "市场营销开拓",
    value: "市场营销开拓",
  },
  {
    name: "其他",
    value: "其他",
  },
]);
const timeLimit = ref([
  {
    name: "1年以内",
    value: "1年以内",
  },
  {
    name: "1-2年",
    value: "1-2年",
  },
  {
    name: "2-3年",
    value: "2-3年",
  },
  {
    name: "3年以上",
    value: "3年以上",
  },
]);
const guarantee = ref([
  {
    name: "房产抵押",
    value: "房产抵押",
  },
  {
    name: "设备抵押",
    value: "设备抵押",
  },
  {
    name: "知识产权质押",
    value: "知识产权质押",
  },
  {
    name: "应收账款质押",
    value: "应收账款质押",
  },
  {
    name: "股权质押",
    value: "股权质押",
  },
  {
    name: "无抵押(信用贷款)",
    value: "无抵押(信用贷款)",
  },
  {
    name: "其他",
    value: "其他",
  },
]);
const showSheet = ref(false);
const sheetTitle = ref("");
const hideKeyboard = (title) => {
  sheetTitle.value = title;
  uni.hideKeyboard();
};
const submit = () => {
  formRef.value.validate().then(valid => {  
    if (valid) {  
      uni.$u.toast('校验通过')
    } else {  
      uni.$u.toast('校验失败')
    }  
  }).catch(() => {  
    // 处理验证错误  
    uni.$u.toast('校验失败')
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
      // width: 690rpx;
      // height:355rpx;
      padding: 43rpx;
      border-radius: 18rpx;
      background-color: $white;
      text-align: center;
      margin-bottom: 30rpx;
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
    .content-form {
      background-color: $white;
      border-radius: 18rpx;
      padding: 43rpx;
      .content-form-title {
        @include title-text;
        margin-bottom: 30rpx;
        padding: 0;
      }
      .content-form-button {
        margin-top: 100rpx;
        text-align: center;
      }
    }
  }
}
</style>
