import { Context } from 'koa'

export const mainRoute = (ctx: Context) => {
  ctx.body = 'Hello world!'
  ctx.status = 200
}
