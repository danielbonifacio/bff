'use strict'

const fs = require('fs')
const _path = require('path')
const { exec } = require('child_process')
const axios = require('axios')
const Renderer = require('./renderer')

const { printHeader, printFooter, printStep, getParamInArguments } = require('./logger')
async function main () {
  printHeader()

  await printStep('Capturando informações da linha de comando', 500)
  // get arguments from console
  const args = process.argv.slice(2)

  const service = getParamInArguments('--service', args)
  const swagger = getParamInArguments('--swagger', args)
  const host = getParamInArguments('--host', args)

  // set dependencies file
  // TODO: add interface to update this via cli
  const dependencies = ['axios']

  await printStep('Acessando a documentação do swagger', 500)
  // get swagger documentation remotely
  const { data: documentation } = await axios.get(swagger)

  await printStep('Criando uma instância de renderização')
  const renderer = new Renderer(dependencies, documentation.paths, host)

  await printStep('Gerando a interface node com base no Swagger', 1000)
  fs.writeFileSync(
    _path.resolve(__dirname, `./sdk/${service}.js`),
    renderer.render(),
    'utf-8'
  )

  await printStep('Verificando e corrigindo o SDK com o ESLint')
  exec('eslint --fix apiGenerator/** --ext .js', () => {
    printFooter()
  })
}

main()
