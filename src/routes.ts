import KoaRouter from 'koa-router'
import * as MainController from './controllers/main'

const router = new KoaRouter()

router.get('/', MainController.mainRoute)

export default router
