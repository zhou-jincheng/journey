<template>
  <div class="catigories">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useHomeStore } from '@/stores';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.catigories {
  display: flex;
  height: 80px;
  align-items: center;
  padding: 0 10px;
  margin-top: 8px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    flex-shrink: 0;
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
    }
    .title {
      margin-top: 8px;
      font-size: 12px;
    }
  }
}
</style>
