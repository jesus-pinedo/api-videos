const router = require('koa-router')()
const controller = require('./contoller')


router.get('/all-videos', async ctx => {
  const videos = controller.getVideos()
  ctx.body = videos
})

router.get('/:id', async ctx => {
	
	const id = ctx.params.id
	console.log("video",id)
  const videos = controller.getVideo(id)
  ctx.body = videos
})


module.exports = router.routes()