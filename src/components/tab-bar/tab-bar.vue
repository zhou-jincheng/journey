<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9645">
      <template v-for="(item, index) in tabbarList" :key="item.text">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img :src="getAssetImageUrl(currentIndex === index ? item.imageActive : item.image)">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import tabbarList from '@/assets/data/tab-bar'
import { getAssetImageUrl } from '@/utils/load_assets'

const currentIndex = ref(0)

</script>

<style lang="less" scoped>
.tabbar {
  img {
    height: 26px;
  }
}
</style>
