import Controller from '@sdk/Controller.class'
import Response from '@sdk/ModuleResponse.interface'
import Service from '@sdk/services/Proposals.service'

class Index extends Controller {
  public async handle (): Promise<Response> {
    this.status = 200
    this.data = await Service.getAll()
    return this.respond()
  }
}

export default new Index()
