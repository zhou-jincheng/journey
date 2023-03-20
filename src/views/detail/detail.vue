<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="$router.back()"
    />
    <template v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-infos :top-infos="mainPart.topModule"/>
      <detail-facility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord :landlord="mainPart.dynamicModule.landlordModule" />
    </template>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { getDetailInfos } from '@/services/modules/detail';
import DetailSwipe from './cpns/detail_01-swipe.vue'
import DetailInfos from './cpns/detail_02-infos.vue'
import DetailFacility from './cpns/detail_03-facility.vue'
import DetailLandlord from './cpns/detail_04-landlord.vue'

const route = useRoute()
const mainPart = ref()
getDetailInfos(route.params.id).then(res => {
  mainPart.value = res.data.mainPart
})
</script>

<style lang="less" scoped>

</style>
