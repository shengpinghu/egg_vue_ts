import { getUpYunConfig } from './API'
export function getCookie (name) {
  const arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  if (arr != null) {
    return unescape(arr[2])
  }
  return null
}
export const uploadFiles = (files = [] as any[]) => {
  return new Promise((resolve, reject) => {
    getUpYunConfig().then((res) => {
      const config = res.data
      resolve(config)
    }).catch((err) => {
      reject(err)
    })
  })
}

/**
 * 上传单个文件
 * @param {*} file
 */
export const upload = (filePath, config) => {
  return new Promise((resolve, reject) => {
    /*
    wx.uploadFile({
      url: config.uploadUrl || '',
      filePath: filePath || '',
      name: config.fileKey || '',
      formData: config.uploadParams,
      success (res) {
        if (res && res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(res.data))
        } else {
          reject(res)
        }
      },
      fail (err) {
        reject(err)
      }
    }) */
  })
}
