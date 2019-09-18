import ModuleResponse from './ModuleResponse.interface'
import HttpException from './HttpException.class'

class Controller {
  public status: number
  public data: object | []
  public HttpException: any

  public constructor () {
    this.status = 200
    this.data = {}
    this.HttpException = HttpException
  }

  public respond = (): ModuleResponse => {
    return {
      status: this.status,
      data: this.data
    }
  }
}

export default Controller
