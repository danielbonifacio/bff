import path from 'path'
import dotenv from 'dotenv'

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV.toLocaleLowerCase()}`)
})

export default {
  app: {
    secret: process.env.SECRET,
    port: process.env.PORT || 3333
  }
}
