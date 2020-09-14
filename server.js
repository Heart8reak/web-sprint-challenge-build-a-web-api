// require('dotenv').config()
const express = require('express')
const helmet = require('helmet')

const projectRouter = require('./data/projects/projectRouter')
const actionRouter = require('./data/actions/actionRouter')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(logger)

server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

server.get('/', (req, res) => {
    res.send(`<h3>Don't worry , be happy :-)</h3>`)
})

//CUSTOM MIDDLEWARE
function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] *** ${req.method} *** ${req.url} from ${req.get('Origin')}`)
    next()
}



module.exports = server