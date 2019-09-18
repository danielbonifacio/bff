import { Router } from 'express'
import Proposal from './backoffice/proposal'

const shims = Router()

shims.use('/backoffice', Proposal)

export default shims
