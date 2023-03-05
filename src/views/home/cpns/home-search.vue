<template>
  <div class="home-search">
    <!-- 城市 -->
    <div class="location">
      <span class="city" @click="cityClick">{{ currentCity.cityName }}</span>
      <span class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </span>
    </div>
    <!-- 入住时间 -->
    <div class="section date-range bottom-gray-line " @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDateStr }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useCityStore } from '@/stores';
import { formatMouthDay } from '@/utils'

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

// 获取当前城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 处理入住时间
const startDate = new Date()
const endDate = new Date().setDate(startDate.getDate() + 1)
const startDateStr = ref(formatMouthDay(startDate))
const endDateStr = ref(formatMouthDay(endDate))
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

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}
.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}
</style>
