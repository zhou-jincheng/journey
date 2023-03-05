import { createPinia } from 'pinia'
import useCityStore from './modules/city'

const pinia = createPinia()

export {
  useCityStore
}
export default pinia
