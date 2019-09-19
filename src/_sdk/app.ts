import express from 'express'
import config from '@sdk/config'
import shims from '@shims'
import { Server } from 'http'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.shims()
  }

  public boot (): Server {
    console.clear()
    console.log(`App starting at http://localhost:${config.app.port}`)
    return this.express.listen(config.app.port)
  }

  private middlewares (): void {
    this.express.use(express.json())
  }

  private shims (): void {
    this.express.use(shims)
  }
}

export default App
