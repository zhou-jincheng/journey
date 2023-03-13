<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="$router.back()"
    />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { getDetailInfos } from '@/services/modules/detail';

const route = useRoute()
getDetailInfos(route.params.id).then(res => {
  console.log(res)
})
</script>

<style lang="less" scoped>

</style>
