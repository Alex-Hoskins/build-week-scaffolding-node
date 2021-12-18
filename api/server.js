const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const itemRouter = require('./routers/items/item-router')
const userRouter = require('./routers/users/user-router')
const authRouter = require('./routers/auth/auth-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/items',itemRouter)
server.use('/api/auth',authRouter)
server.use('/api/users',userRouter)

module.exports = server
