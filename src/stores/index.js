import { createPinia } from 'pinia'
import useCityStore from './modules/city'
import useHomeStore from './modules/home'

const pinia = createPinia()

export {
  useCityStore,
  useHomeStore
}
export default pinia
