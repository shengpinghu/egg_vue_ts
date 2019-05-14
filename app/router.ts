
import { Application } from 'egg'

export default (application: Application) => {
  const { router, controller } = application
  // 所有api请求
  router.all('/api/**', controller.index.upload)
  router.get('/*', controller.index.index)
}
