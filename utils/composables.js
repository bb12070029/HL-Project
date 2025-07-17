import { ref, computed, onMounted, onUnmounted } from 'vue'

// 计数器组合式API
export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => {
    count.value++
  }
  
  const decrement = () => {
    count.value--
  }
  
  const reset = () => {
    count.value = initialValue
  }
  
  const doubleCount = computed(() => count.value * 2)
  
  return {
    count,
    increment,
    decrement,
    reset,
    doubleCount
  }
}

// 网络状态组合式API
export function useNetworkStatus() {
  const isOnline = ref(true)
  const networkType = ref('')
  
  const updateNetworkStatus = () => {
    uni.getNetworkType({
      success: (res) => {
        networkType.value = res.networkType
        isOnline.value = res.networkType !== 'none'
      }
    })
  }
  
  onMounted(() => {
    updateNetworkStatus()
    // 监听网络状态变化
    uni.onNetworkStatusChange((res) => {
      isOnline.value = res.isConnected
      networkType.value = res.networkType
    })
  })
  
  onUnmounted(() => {
    // 取消监听
    uni.offNetworkStatusChange()
  })
  
  return {
    isOnline,
    networkType,
    updateNetworkStatus
  }
}

// 本地存储组合式API
export function useStorage(key, defaultValue = null) {
  const value = ref(defaultValue)
  
  const getValue = () => {
    try {
      const stored = uni.getStorageSync(key)
      value.value = stored || defaultValue
    } catch (e) {
      console.error('获取存储失败:', e)
      value.value = defaultValue
    }
  }
  
  const setValue = (newValue) => {
    try {
      uni.setStorageSync(key, newValue)
      value.value = newValue
    } catch (e) {
      console.error('设置存储失败:', e)
    }
  }
  
  const removeValue = () => {
    try {
      uni.removeStorageSync(key)
      value.value = defaultValue
    } catch (e) {
      console.error('删除存储失败:', e)
    }
  }
  
  onMounted(() => {
    getValue()
  })
  
  return {
    value,
    getValue,
    setValue,
    removeValue
  }
}

// 请求加载状态组合式API
export function useLoading() {
  const loading = ref(false)
  
  const withLoading = async (asyncFn) => {
    loading.value = true
    try {
      const result = await asyncFn()
      return result
    } finally {
      loading.value = false
    }
  }
  
  return {
    loading,
    withLoading
  }
}

// 表单验证组合式API
export function useFormValidation() {
  const errors = ref({})
  
  const validate = (rules, formData) => {
    errors.value = {}
    
    for (const field in rules) {
      const rule = rules[field]
      const value = formData[field]
      
      if (rule.required && !value) {
        errors.value[field] = rule.message || `${field}不能为空`
        continue
      }
      
      if (rule.pattern && !rule.pattern.test(value)) {
        errors.value[field] = rule.message || `${field}格式不正确`
        continue
      }
      
      if (rule.validator) {
        const result = rule.validator(value, formData)
        if (result !== true) {
          errors.value[field] = result
        }
      }
    }
    
    return Object.keys(errors.value).length === 0
  }
  
  const clearErrors = () => {
    errors.value = {}
  }
  
  return {
    errors,
    validate,
    clearErrors
  }
} 