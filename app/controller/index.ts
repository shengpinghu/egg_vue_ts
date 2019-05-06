import { Controller, Context } from 'egg'

export default class AdminController extends Controller {
  public async home (ctx: Context) {
    const config = this.app.config
    await ctx.renderClient('main.js', {
      url: ctx.url,
      config: config.env
    })
  }
}
