import JcRequest from '../request/request'

export function getHotSuggests() {
  return JcRequest.get({
    url: '/home/hotSuggests'
  })
}

export function getCategories() {
  return JcRequest.get({
    url: '/home/categories'
  })
}
