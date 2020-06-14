console.log("test app")

const Koa = require('koa')
//const router = require('koa-router')
const router = require('./routes')
const Cors = require('@koa/cors')
const BodyParser = require('koa-bodyparser')
//const Helmet = require('koa-helmet')
const Respond = require('koa-respond')
//const mongo = require('../db/index')
const app = new Koa()
app.use(Cors())
app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function(err, ctx) {
    if (err) ctx.throw('Body parse error', 422)
  }
}))

app.use(Respond())

app.use(router.routes())
app.use(router.allowedMethods())
//module.exports = app


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`API server started on ${port}`))