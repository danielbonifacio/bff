import axios from 'axios'

export interface User {
  id: string
  name: string
  age: number
}

class UserService {
  private host: string

  public constructor () {
    this.host = 'http://localhost:4400'
  }

  public async getUsers (): Promise<User[]> {
    try {
      const { data } = await axios.get(`${this.host}/users`)
      return data
    } catch (err) {
      throw Error(err.message)
    }
  }
}

export default new UserService()
