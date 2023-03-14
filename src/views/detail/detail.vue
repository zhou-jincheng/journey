<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="$router.back()"
    />
    <home-swipe v-if="topModule.housePicture" :swipe-data="topModule.housePicture.housePics" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { getDetailInfos } from '@/services/modules/detail';
import HomeSwipe from './cpns/home-swipe.vue'

const route = useRoute()
const topModule = ref({})
getDetailInfos(route.params.id).then(res => {
  const mainPart = res.data.mainPart
  topModule.value = mainPart.topModule
})
</script>

<style lang="less" scoped>

</style>
