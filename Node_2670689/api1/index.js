require('dotenv').config()

const {Server} =require('./models/server')

const server = new Server()//creando instanacia 

// console.log(server)

server.listen()