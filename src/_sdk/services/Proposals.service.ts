import axios from 'axios'

export interface Proposal {
  id: string
  name: string
  age: number
}

class ProposalsService {
  private host: string

  public constructor () {
    this.host = 'http://localhost:9925'
  }

  public async getAll (): Promise<ProposalsService[]> {
    const { data } = await axios.get(`${this.host}/proposals`)
    return data
  }
}

export default new ProposalsService()
