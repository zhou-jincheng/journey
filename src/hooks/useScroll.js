import { onUnmounted, onMounted, ref } from 'vue';
import { throttle } from 'underscore'

export default function useScroll(elRef) {
  let el = window
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const handleScroll = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log('到底了')
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    el.removeEventListener('scroll', handleScroll)
  })

  return {
    isReachBottom,
    clientHeight,
    scrollTop,
    scrollHeight
  }
}
