const concurrently = require('concurrently')

const commands = [
  {
    command: 'json-server --watch users.json --port 9632 --delay 500',
    name: 'users service',
    prefixColor: 'green'
  },
  {
    command: 'json-server --watch proposal.json --port 9925 --delay 500',
    name: 'proposal service',
    prefixColor: 'cyan'
  }
]

concurrently(commands)
