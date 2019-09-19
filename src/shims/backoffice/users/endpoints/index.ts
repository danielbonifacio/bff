import Index from './Index.controller'
import Create from './Create.controller'
import Delete from './Delete.controller'

export default [
  {
    path: '/',
    method: 'get',
    controller: Index,
    parameters: ['params.userName'],
    description: 'List all users'
  },
  {
    path: '/',
    method: 'post',
    controller: Create,
    parameters: ['body.user'],
    description: 'Post a new user'
  },
  {
    path: '/:userId',
    method: 'delete',
    controller: Delete,
    parameters: ['params.userId'],
    description: 'Delete a user'
  }
]
