const Koa = require('koa')
const koaBody = require('koa-body')
const router = require('./routes/index')
const app = new Koa()

app.use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())

// Export koa app
module.exports = {
  handler: app.callback()
}

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
