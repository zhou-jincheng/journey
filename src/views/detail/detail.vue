<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="$router.back()"
    />
    <div v-if="topModule" class="main">
      <detail-swipe :swipe-data="topModule.housePicture.housePics" />
      <detail-infos :top-infos="topModule"/>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { getDetailInfos } from '@/services/modules/detail';
import DetailSwipe from './cpns/detail_01-swipe.vue'
import DetailInfos from './cpns/detail_02-infos.vue'


const route = useRoute()
const topModule = ref()
getDetailInfos(route.params.id).then(res => {
  const mainPart = res.data.mainPart
  topModule.value = mainPart.topModule
})
</script>

<style lang="less" scoped>

</style>
