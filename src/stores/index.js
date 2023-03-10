import { createPinia } from 'pinia'
import useCityStore from './modules/city'
import useHomeStore from './modules/home'
import useMainStore from './modules/main'

const pinia = createPinia()

export {
  useCityStore,
  useHomeStore,
  useMainStore
}
export default pinia
