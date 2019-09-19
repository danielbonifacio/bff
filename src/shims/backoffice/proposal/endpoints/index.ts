import Greet from './Greet.controller'
import Index from './Index.controller'

export default [
  {
    path: '/:userName',
    method: 'get',
    controller: Greet,
    parameters: ['params.userName'],
    description: 'Greet user'
  },
  {
    path: '/',
    method: 'get',
    controller: Index,
    parameters: [],
    description: 'List all users'
  }
]
