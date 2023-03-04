<template>
  <div class="home-search">
    <div class="location">
      <span class="city" @click="cityClick">广州</span>
      <span class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
// 去城市页面
function cityClick() {
  router.push('/city')
}
// 获取我的位置
function positionClick() {
  navigator.geolocation.getCurrentPosition(res => {
    console.log(res)
  }, err => {
    console.log(err)
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  })
}
</script>

<style lang="less" scoped>

.location {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  border: 1px solid #eee;
  .city {
    font-size: 15px;
  }
  .position {
    .text {
      font-size: 12px;
      color: #888;
      margin-right: 4px;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
