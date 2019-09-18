import Index from './Index.controller'

export default [
  {
    path: '/',
    method: 'get',
    controller: Index,
    parameters: ['params.userName'],
    description: 'List all users'
  }
]
