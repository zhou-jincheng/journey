<template>
  <div class="home-content">
    <h2 class="title">热门精选</h2>
    <div class="content">
      <template v-for="item in houseList" :key="item.data.houseId">
        <home-item-v3 v-if="item.discoveryContentType === 3" :item-data="item.data" @click="itemClick(item.data)"/>
        <home-item-v9 v-else-if="item.discoveryContentType === 9" :item-data="item.data" @click="itemClick(item.data)"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import useHomeStore from '@/stores/modules/home';
import HomeItemV3 from '@/components/home-item-v3/home-item-v3.vue'
import HomeItemV9 from '@/components/home-item-v9/home-item-v9.vue'

const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)

// 点击跳转到详情项
const router = useRouter()
function itemClick(itemData) {
  router.push(`/detail/${itemData.houseId}`)
}

</script>

<style lang="less" scoped>
.home-content {
  margin-top: 14px;
  padding: 0 10px;
  .title {
    padding-left: 4px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    margin: 6px -5px;
  }
}
</style>
