<template>
  <div class="city">
    <van-search
      v-model="searchText"
      placeholder="城市/区域/位置"
      shape="round"
      show-action
      @cancel="onCancel"
    />
    <div>{{ cityStore.allCities?.cityGroup?.title }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';

const searchText = ref('')

const router = useRouter()
function onCancel() {
  router.back()
}

// 获取城市数据
const cityStore = useCityStore()
cityStore.fetchCityAll()

</script>

<style lang="less" scoped>

</style>
