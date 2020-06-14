const router = require('koa-router')()

const moment = require('moment')
const today = moment().utc()

router.get('/test', async ctx => {
  const health = await this.read()
  ctx.body = health
})


exports.read = async() => {
  const x= moment().utc()
  const currentTime = x
  const hour = currentTime.diff(today, 'hours')
  const minute = currentTime.diff(today, 'minutes')
  const second = currentTime.diff(today, 'seconds')

  return {
    'status': 'UP',
    'startTime': today.utc(),
    'upTime': `${hour}h, ${minute}m, ${second}s`
  }
}
module.exports = router.routes()