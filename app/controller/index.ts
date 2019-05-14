import { Controller, Context } from 'egg'

export default class AdminController extends Controller {
  public async index (ctx: Context) {
    const config = this.app.config
    await ctx.renderClient('main.js', {
      url: ctx.url,
      config: config.env
    })
  }

  async upload () {
    const { ctx } = this
    const { method, url, body } = ctx.request
    const HOST = this.app.config.env as any
    const res = await ctx.curl(`${HOST.apiHost}${url}`, {
      method,
      data: body,
      dataType: 'json',
      contentType: 'json'
    } as any)
    ctx.body = res.data
  }
}
