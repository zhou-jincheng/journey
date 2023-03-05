<template>
  <div class="city">
    <div class="top">
      <!-- 搜索框 -->
      <van-search
        v-model="searchText"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="onCancel"
      />
      <!-- tab栏 -->
      <van-tabs v-model:active="activeName" color="#ff9854">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key" />
        </template>
      </van-tabs>
    </div>
    <!-- 城市展示区 -->
    <div class="content">
      <template v-for="(value, key) in allCities" :key="key">
        <city-group v-show="activeName === key" :group-data="value"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import useCityStore from '@/stores/modules/city'
import CityGroup from './cpns/city-group.vue'

const searchText = ref('')

const router = useRouter()
function onCancel() {
  router.back()
}

// 获取城市数据
const activeName = ref()
const cityStore = useCityStore()
cityStore.fetchCityAll()
const { allCities } = storeToRefs(cityStore)

const currentGroup = computed(() => allCities.value[activeName.value])

</script>

<style lang="less" scoped>
.city {
  .content {
    position: relative;
    z-index: 9;
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
