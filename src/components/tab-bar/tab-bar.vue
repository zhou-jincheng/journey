<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarList" :key="item.text">
      <div
        :class="{active: currentIndex === index}"
        class="tabbar-item"
        @click="tabClick(index, item)">
        <img :src="getAssetImageUrl(currentIndex === index ? item.imageActive : item.image)">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import tabbarList from '@/assets/data/tab-bar'
import { getAssetImageUrl } from '@/utils/load_assets'

const currentIndex = ref(0)
const router = useRouter()
function tabClick(index, item) {
  currentIndex.value = index
  router.push(item.path)
}

</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  border-top: 1px solid #eee;
  display: flex;
  .tabbar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.active {
      color: var(--primary-color);
    }
    img {
      width: 34px;
    }
    .text {
      margin-top: 2px;
      font-size: 12px;
    }
  }
}
</style>
