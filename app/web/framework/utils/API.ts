import Fetch from './request'
export const getArticleType = function () {
  return Fetch.getData('/api/truck/assured-vehicle/article-maintenance/categories')
}

export const getNewsList = function (data) {
  return Fetch.getData('/api/truck/assured-vehicle/article-maintenance/list', data)
}

export const saveArticle = function (data) {
  return Fetch.postData('/api/truck/assured-vehicle/article-maintenance/save', data)
}

/**
 * 获取又拍云配置信息
 */
export function getUpYunConfig () {
  return Fetch.getData<string>('/api/truck/assured-vehicle/misc/upyunUploadConfig')
}

export function uploadImg (url, data) {
  return Fetch.postData<string>(url, data, { 'Content-Type': 'application/x-www-form-urlencoded' })
}

export const offOrOn = function (url, data) {
  return Fetch.getData(url, data)
}
