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
      <view class="content-form">
        <view class="content-form-title">提交诉求</view>
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
            label="诉求内容"
            prop="userInfo.sex"
            :borderBottom="true"
            @click="
              showSheet = true;
              actions = content;
              hideKeyboard('请选择诉求内容');
            "
            ref="item1"
          >
            <up-input
              v-model="model1.userInfo.sex"
              disabled
              disabledColor="#ffffff"
              placeholder="诉求内容(必填)"
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
          <up-form-item
            label="上传附件(选填)"
            prop="userInfo.sex"
            :borderBottom="true"
            ref="item1"
          >
            <up-upload
              :fileList="fileList1"
              @afterRead="afterRead"
              @delete="deletePic"
              name="1"
              multiple
              :maxCount="10"
            ></up-upload>
          </up-form-item>
          <view class="content-form-button">
            <up-button type="primary" color="#0345fa" @click="submit"
              >提交诉求</up-button
            >
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
const content = ref([
  {
    name: "政策咨询",
    value: "政策咨询",
  },
  {
    name: "基础设施",
    value: "基础设施",
  },
  {
    name: "园区服务",
    value: "园区服务",
  },
  {
    name: "安全管理",
    value: "安全管理",
  },
  {
    name: "环境问题",
    value: "环境问题",
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
const fileList = ref([]);
const afterRead = async (event) => {
  // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
  let lists = [].concat(event.file);
  let fileListLen = fileList.value.length;
  lists.map((item) => {
    fileList.value.push({
      ...item,
      status: 'uploading',
      message: '上传中',
    });
  });
  for (let i = 0; i < lists.length; i++) {
    const result = await uploadFilePromise(lists[i].url);
    let item = fileList.value[fileListLen];
    fileList.value.splice(fileListLen, 1, {
      ...item,
      status: 'success',
      message: '',
      url: result,
    });
    fileListLen++;
  }
};
const uploadFilePromise = (url) => {
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: url,
      filePath: url,
      name: 'file',
      formData: {
        name: 'test'
      },
      success: (res) => {
        resolve(res.data);
      }
    });
  });
};
const deletePic = (e) => {
  fileList.value.splice(event.index, 1);
};
const submit = () => {
  formRef.value
    .validate()
    .then((valid) => {
      if (valid) {
        uni.$u.toast("校验通过");
      } else {
        uni.$u.toast("校验失败");
      }
    })
    .catch(() => {
      // 处理验证错误
      uni.$u.toast("校验失败");
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
