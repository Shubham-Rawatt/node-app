// const http = require('http') 
import http from 'http'

const server = http.createServer((req , res) =>{
    res.end("this is my first server")
})

server.listen(8000)