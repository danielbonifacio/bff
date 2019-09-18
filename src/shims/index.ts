import { Router } from 'express'
import Proposal from './backoffice/proposal'
import Users from './backoffice/users'

const shims = Router()

shims.use('/backoffice', Proposal)
shims.use('/users', Users)

export default shims
