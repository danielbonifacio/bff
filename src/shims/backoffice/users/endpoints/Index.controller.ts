import {
  ControllerClass as Controller,
  ModuleResponseInterface as ModuleResponse
} from '@sdk/index'

import Users, { User } from '@sdk/services/Users.service'

interface Card {
  lastDigits: string
  flag: string
}

interface EnhancedUser {
  id: string
  name: string
  card: Card
}

class Index extends Controller {
  public handle = async (): Promise<ModuleResponse> => {
    this.status = 200
    this.data = this.enhance(await Users.getUsers())

    return this.respond()
  }

  private enhance (users: User[]): EnhancedUser[] {
    return users.map((user): EnhancedUser => ({ ...user, card: { lastDigits: '1234', flag: 'mc' } }))
  }
}

export default new Index()
