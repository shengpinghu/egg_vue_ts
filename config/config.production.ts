/**
 * production
 *
 *  prod + default（override）
 */

import { Application, EggAppConfig } from 'egg'

export default (appInfo: EggAppConfig) => {
  const config: any = {}
  config.env = {
    apiHost: 'www.fangxinche.baixing.com'
  }
  return config
}
