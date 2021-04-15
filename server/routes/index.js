const childProcess = require('child_process')
const Router = require('koa-router')
const router = new Router()

router
  .get('/', (ctx) => {
    ctx.body = 'hello koa'
  })
  .post('/exec', (ctx) => {
    const { commands } = ctx.request.body
    childProcess.exec(commands, (error, stdout, stderr) => {
      if (error) {
        //
      }
      // eslint-disable-next-line no-console
      console.log(commands, stdout, stderr)
    })
    ctx.body = {
      code: 200,
      msg: 'ok'
    }
  })

module.exports = router
