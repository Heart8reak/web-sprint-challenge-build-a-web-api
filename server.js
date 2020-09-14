const express = require('express')
const helmet = require('helmet')

const server = express()

server.use(express.json())
server.use(helmet())

server.get('/', (req, res) => {
    res.send(`<h3>Don't worry , be happy :-)</h3>`)
})

module.exports = server