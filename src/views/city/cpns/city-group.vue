<template>
  <div class="city-group">
    <van-index-bar
      :sticky="false"
      :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="hot-list">
        <template v-for="city in groupData.hotCities" :key="city.cityId">
          <div class="list-item" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>
      <template v-for="group in groupData.cities" :key="group.group">
        <van-index-anchor :index="group.group" />
        <template v-for="city in group.cities" :key="city.cityId">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})
// 筛选索引栏
const indexList = computed(() => {
  const tempList = props.groupData.cities?.map(item => item.group) ?? []
  tempList.unshift('#')
  return tempList
})

// 选中城市
const cityStore = useCityStore()
const router = useRouter()
function cityClick(city) {
  cityStore.currentCity = city
  router.back()
}
</script>

<style lang="less" scoped>
.hot-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;
  .list-item {
    margin: 6px 0;
    overflow: hidden;
    width: 70px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background-color: #fff4ec;
    border-radius: 14px;
  }
}
</style>
