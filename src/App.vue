<template>
  <div class="app" :style="{ height: route.meta.hideTabBar ? '100vh' : 'calc(100vh - 50px)' }">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hideTabBar"/>
  </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tab-bar.vue'
import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<style scoped>
.app {
  overflow-y: auto;
}
</style>
