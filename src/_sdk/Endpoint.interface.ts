import ModuleController from '@sdk/ModuleController.interface'

export default interface Endpoint {
  path?: string
  method?: string
  description?: string
  controller: ModuleController
  parameters: string[]
  '@middlewares'?: any[]
}
