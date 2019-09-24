class Renderer {
  /**
   * @param {String[]} dependencies Dependências a serem importadas
   * @param {Object} paths Paths do objeto Swagger
   * @param {String} host Host do serviço
   */
  constructor (dependencies, paths, host) {
    this.dependencies = dependencies
    this.paths = paths
    this.host = host
  }

  renderDependencies () {
    return `${this.dependencies.map(dependency => `import ${dependency} from '${dependency}'\n`)}`
  }

  renderQueryStringParams (queryParams) {
    return `?${queryParams.map(qp => `${qp.name}=\${${qp.name}}`).join('&')}`
  }

  renderRoute (path, parameters) {
    const inPathParameters = parameters.filter(p => p.in === 'path')
    const inBodyParameters = parameters.filter(p => p.in === 'body' || p.in === 'formData')
    const inQueryParameters = parameters.filter(p => p.in === 'query')

    let newPath = path

    inPathParameters.forEach(param => {
      const reg = new RegExp(`{${param.name}}`, 'g')
      const paramMatches = reg.test(path)
      newPath = paramMatches
        ? newPath.replace(reg, `\${${param.name}}`)
        : newPath
    })

    const inQuery = this.renderQueryStringParams(inQueryParameters)
    newPath += inQueryParameters.length ? inQuery : ''

    return `\`${this.host}${newPath}\`${inBodyParameters.length ? `, { ${inBodyParameters.map(p => p.name).join(', ')} }` : ''}`
  }

  renderParams (params) {
    return params.filter(p => p.in !== 'header').map(p => p.name).join(', ')
  }

  renderMethod (route, path, verb) {
    return `
/**
 * ${route.summary}${route.parameters.filter(p => p.in !== 'header').length ? '\n' + route.parameters.filter(p => p.in !== 'header').map((param, i, { length }) => {
  const isLast = length - 1 === i
  return ` * @param ${param.name} ${param.description || ''}${!isLast ? '\n' : ''}`
}).join('') : ''}
  */
export const ${route.operationId} = async ${route.parameters.length ? `(${this.renderParams(route.parameters)})` : '()'} => {
  return axios.${verb}(${this.renderRoute(path, route.parameters)})
}
`
  }

  renderPaths () {
    const paths = Object.keys(this.paths)
    let str = ''
    paths.map(path => {
      Object.keys(this.paths[path]).map(verb => {
        str += this.renderMethod(this.paths[path][verb], path, verb)
      })
    })
    return str
  }

  render () {
    return `${this.renderDependencies()}${this.renderPaths()}`
  }
}

module.exports = Renderer
