import Module from '@sdk/services/ModuleRegister.service'
import endpoints from './endpoints'

const userModule = new Module(endpoints)

userModule.registerEndpoints()

export default userModule.getRoutes()
