import jcRequest from '../request/request'

export function getDetailInfos(houseId) {
  return jcRequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}
