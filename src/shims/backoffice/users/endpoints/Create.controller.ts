import Controller from '@sdk/Controller.class'
import ModuleResponse from '@sdk/ModuleResponse.interface'
import UserService, { User } from '@sdk/services/Users.service'

class Create extends Controller {
  public async handle (user: User): Promise<ModuleResponse> {
    this.status = 200
    this.data = await UserService.postUser(user)
    return this.respond()
  }
}

export default new Create()
