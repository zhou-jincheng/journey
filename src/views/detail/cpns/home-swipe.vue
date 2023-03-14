<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active }">
        <div class="indicator">
          <template v-for="(value, key) in swipeGroup" :key="key">
            <span class="item" :class="{active: swipeData[active]?.enumPictureCategory == key}">
              <span class="title">{{ getName(value[0].title) }}</span>
              <span class="count" v-show="swipeData[active]?.enumPictureCategory == key">{{ getIndex(swipeData[active]) }}/{{ value.length }}</span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

const swipeGroup = {}
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  if (!valueArray) {
    swipeGroup[item.enumPictureCategory] = valueArray = []
  }
  valueArray.push(item)
}

// 处理数据
function getName(title) {
  const regExp = /【(.*?)】/
  const result = regExp.exec(title)
  return result[1]
}
function getIndex(activeItem) {
  const valueArray = swipeGroup[activeItem?.enumPictureCategory]
  const index = valueArray?.findIndex(item => item === activeItem)
  return index === undefined ? '' : (index + 1)
}
</script>

<style lang="less" scoped>
.swipe-list {
  position: relative;
  img {
    width: 100%;
  }
  .indicator {
    position: absolute;
    right: 4px;
    bottom: 4px;
    padding: 2px 6px;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    .item {
      display: inline-block;
      padding: 0 4px;
      border-radius: 6px;
      &.active {
        background-color: #fff;
        color: #000;
      }
    }
  }
}
</style>
