import Greet from './Greet.controller'

export default [
  {
    path: '/:userName',
    method: 'get',
    controller: Greet,
    parameters: ['params.userName'],
    description: 'Greet user'
  }
]
