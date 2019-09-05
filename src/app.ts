import Koa from 'koa'
import router from './routes'

const app = new Koa()
app.use(router.routes()).use(router.allowedMethods())

// eslint-disable-next-line no-undef
export default app.listen(3000, () => console.log('running on port 3000'))
