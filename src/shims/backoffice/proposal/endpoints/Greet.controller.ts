import {
  ControllerClass as Controller,
  ModuleResponseInterface as ModuleResponse
} from '@sdk/index'

import greet from '@sdk/services/Greet.service'

class Greet extends Controller {
  private userName: string

  public handle = async (userName: string): Promise<ModuleResponse> => {
    this.status = 200
    this.data = {
      message: greet(userName)
    }

    return this.respond()
  }
}

export default new Greet()
