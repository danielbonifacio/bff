import axios from 'axios'

export interface User {
  id: string
  name: string
  age: number
}

class UserService {
  private host: string

  public constructor () {
    this.host = 'http://localhost:9632'
  }

  public async getUsers (): Promise<User[]> {
    const { data } = await axios.get(`${this.host}/users`)
    return data
  }

  public async postUser (user: User): Promise<User> {
    const { data } = await axios.post(`${this.host}/users`, user)
    return data
  }

  public async deleteUser (id: string): Promise<any> {
    const { data } = await axios.delete(`${this.host}/users/${id}`)
    return data
  }
}

export default new UserService()
