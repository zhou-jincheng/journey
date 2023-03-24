<template>
  <div class="home" ref="homeRef">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search/>
    <home-categories/>
    <home-content/>
    <search-bar v-show="showSearchBar">我是搜索框</search-bar>
  </div>
</template>
<script>
export default { name: 'home' }
</script>
<script setup>
import useHomeStore from '@/stores/modules/home';
import { useScroll } from '@/hooks';
import { watch, computed, ref, onActivated } from 'vue';
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearch from './cpns/home-search.vue'
import HomeCategories from './cpns/home.categories.vue'
import HomeContent from './cpns/home-content.vue'
import SearchBar from '@/components/search-bar/search-bar.vue'

// 获取热门建议数据
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

// 监听滚动到底部
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, async (newValue) => {
  if (newValue) {
    await homeStore.fetchHouseListData()
    isReachBottom.value = false
  }
})

// 控制search-bar的显示
const showSearchBar = computed(() => scrollTop.value > 100)

// 记录切换页面时的滚动位置
onActivated(() => {
  homeRef.value.scrollTo({
    top: scrollTop.value
  })
})

</script>

<style lang="less" scoped>
.home {
  padding-bottom: 56px;
  height: 100vh;
  overflow-y: auto;
}
.banner {
  img {
    width: 100%;
  }
}
</style>
