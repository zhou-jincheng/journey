import jcRequest from '../request/request'

export const getCityAll = () => {
  return jcRequest.get({
      url: '/city/all'
  })
}
