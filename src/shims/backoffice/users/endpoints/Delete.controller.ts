import Controller from '@sdk/Controller.class'
import ModuleResponse from '@sdk/ModuleResponse.interface'
import UserService from '@sdk/services/Users.service'

class Delete extends Controller {
  public async handle (id: string): Promise<ModuleResponse> {
    this.status = 200
    this.data = await UserService.deleteUser(id)
    return this.respond()
  }
}

export default new Delete()
