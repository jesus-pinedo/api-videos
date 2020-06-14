const Router = require('koa-router')
const health = require('./../api/health/routes')
const videos = require('./../api/videos/routes')

const router = new Router()

router.use('/health', health)
router.use('/video', videos)
module.exports = router