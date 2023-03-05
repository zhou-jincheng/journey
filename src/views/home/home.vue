<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search/>
  </div>
</template>

<script setup>
import { useHomeStore } from '@/stores';
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearch from './cpns/home-search.vue'

// 获取热门建议数据
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
