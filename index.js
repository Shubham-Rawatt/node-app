// const http = require('http') 
import http from 'http'

const server = http.createServer((req , res) =>{ 
    if(req.url == "/"){
        res.end('welcome to home route')
    } else if(req.url == "/about"){
        req.url('welcome to about')
    } else if (req.url == "/contact"){
        req.url('welcome to contact')
    } else{
        res.end('404 page not found')
    }
})

server.listen(8000)