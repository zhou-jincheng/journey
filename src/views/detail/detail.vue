<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="$router.back()"
    />
    <Transition>
      <van-tabbar v-if="showTabbar" :modelValue="currentIndex" class="tabbar">
        <template v-for="item in names" :key="item">
          <van-tabbar-item @click="tabbarItemClick(item)">{{ item }}</van-tabbar-item>
        </template>
      </van-tabbar>
    </Transition>
    <template v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-infos name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule"/>
      <detail-facility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule" />
      <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule" />
      <detail-notice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
      <detail-map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/>
      <detail-intro :introduction="mainPart.introductionModule" />
    </template>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, watch } from 'vue';
import { getDetailInfos } from '@/services/modules/detail';
import DetailSwipe from './cpns/detail_01-swipe.vue'
import DetailInfos from './cpns/detail_02-infos.vue'
import DetailFacility from './cpns/detail_03-facility.vue'
import DetailLandlord from './cpns/detail_04-landlord.vue'
import DetailComment from './cpns/detail_05-comment.vue'
import DetailNotice from './cpns/detail_06-notice.vue'
import DetailMap from './cpns/detail_07-map.vue'
import DetailIntro from './cpns/detail_08-intro.vue'
import { useScroll } from '@/hooks';

const route = useRoute()
const mainPart = ref()
getDetailInfos(route.params.id).then(res => {
  mainPart.value = res.data.mainPart
})

// 控制tabbar显示
const { scrollTop } = useScroll()
const showTabbar = computed(() => scrollTop.value >= 150)
// 获取tabbar内容
const sectionEls = ref({})
const names = computed(() => Object.keys(sectionEls.value))

function getSectionRef(value) {
  const name = value?.$el.getAttribute('name')
  sectionEls.value[name] = value
}

// 处理当前tabbar栏高亮项
let isClick = false
let clickOffsetTop = 0 // 点击tabbar的offsetTop
const currentIndex = ref(0)
watch(scrollTop, (scrollTop) => {
  if (scrollTop === clickOffsetTop) {
    isClick = false
  }
  if (isClick) return
  let index = names.value.length - 1
  const sectionOffsetTops = names.value.map(name => sectionEls.value[name].$el.offsetTop)
  for (const indey in sectionOffsetTops) {
    if (scrollTop < sectionOffsetTops[indey] - 50) {
      index = indey - 1
      break
    }
  }
  if (index > -1 && currentIndex.value !== index) currentIndex.value = index
})

// 处理tabbar点击
function tabbarItemClick(name) {
  const top = sectionEls.value[name].$el.offsetTop - 50
  isClick = true
  clickOffsetTop = top
  window.scrollTo({
    top,
    behavior: 'smooth'
  })
}

</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
}
</style>
