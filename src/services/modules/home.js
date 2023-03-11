import jcRequest from '../request/request'

export function getHotSuggests() {
  return jcRequest.get({
    url: '/home/hotSuggests'
  })
}

export function getCategories() {
  return jcRequest.get({
    url: '/home/categories'
  })
}

export function getHouseList(page) {
  return jcRequest.get({
    url: '/home/houselist',
    params: {
      page
    }
  })
}
