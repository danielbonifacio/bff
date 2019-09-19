const swagger = require('./swagger')

const keys = Object.keys(swagger.paths)

console.log(swagger.paths['/pet'])
