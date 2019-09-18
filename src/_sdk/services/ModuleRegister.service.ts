import { get } from 'lodash'
import { Router, Request, Response } from 'express'
import Endpoint from '@sdk/Endpoint.interface'
import ModuleController from '@sdk/ModuleController.interface'

class ModuleRegisterService {
  public endpoints: Endpoint[]
  public routes: Router

  public constructor (endpoints: Endpoint[]) {
    this.endpoints = endpoints
    this.routes = Router()
  }

  private registerDocumentedRoutes (): void {
    this.routes.get('/_docs', (req: Request, res: Response): void => {
      try {
        res
          .send(this.endpoints)
      } catch (err) {
        res
          .status(err.status)
          .send({ message: err.message })
      }
    })
  }

  private getParams (params: string[], req: Request): any[] {
    return params.map((param): void => {
      return get(req, param)
    })
  }

  private async route (req: Request, res: Response, controller: ModuleController, parameters: string[]): Promise<Response> {
    try {
      const params = this.getParams(parameters, req)
      const { status, data } = await controller.handle(...params)
      return res.status(status).send(data)
    } catch (err) {
      console.log(err)
      return res
        .status(err.status || 500)
        .send({ message: err.message, data: err.data })
    }
  }

  private async documentation (res: Response, endpoint: Endpoint): Promise<Response> {
    try {
      return res.send({
        path: endpoint.path,
        description: endpoint.description,
        parameters: endpoint.parameters,
        method: endpoint.method
      })
    } catch (err) {
      console.log('error on documentation')
      return res.status(500).send({ message: err.message })
    }
  }

  private async decideToRoute (req: Request, res: Response, endpoint: Endpoint): Promise<Response> {
    try {
      const { controller, parameters } = endpoint
      return req.query.docs
        ? this.documentation(res, endpoint)
        : this.route(req, res, controller, parameters)
    } catch (err) {
      return res.status(500).send(err)
    }
  }

  private registerSingleEndpoint = (endpoint: Endpoint): void => {
    const { path } = endpoint
    const method = endpoint.method.toLowerCase()
    const middlewares = endpoint['@middlewares'] || []
    this.routes[method](path, ...middlewares, (req: Request, res: Response): Promise<Response> =>
      this.decideToRoute(req, res, endpoint))
  }

  public registerEndpoints (): void {
    this.endpoints
      .forEach(this.registerSingleEndpoint)
    this.registerDocumentedRoutes()
  }

  public getRoutes (): Router {
    return this.routes
  }
}

export default ModuleRegisterService
