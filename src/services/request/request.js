import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import useMainStore from "@/stores/modules/main";
const mainStore = useMainStore()

class JcRquest {
  constructor({ baseURL, timeout }) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 添加请求相应拦截器
    this.instance.interceptors.request.use(config => {
      mainStore.loading = true
      return config
    }, err => err)

    this.instance.interceptors.response.use(res => {
      mainStore.loading = false
      return res
    }, err => {
      mainStore.loading = false
      return err
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }

}

export default new JcRquest({ baseURL: BASE_URL, timeout: TIMEOUT })
