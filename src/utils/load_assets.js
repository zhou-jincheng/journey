
/**
 * 动态获取图片的src
 * @param {String} image 以@/assets/img为根路径的资源路径
 * @returns 资源的真正路径
 */
export const getAssetImageUrl = (image) => {
  // 参数一：相对路径
  // 参数二：当前文件的绝对路径
  return new URL(`../assets/img/${image}`, import.meta.url).href
}
