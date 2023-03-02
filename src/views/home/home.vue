<template>
  <div class="home">
    <h2>{{ cityStore.count }}</h2>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';

const cityStore = useCityStore()
</script>

<style lang="less" scoped>

</style>
