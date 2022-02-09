//http server using event emitter

const http = require('http')

//using event emitter API

const server = http.createServer()
//emits request event
//subscribe to it/listen for it/respond to it
//request is an event here the event emitter class has the event request

server.on('request',(req,res) => {
	res.end('Welcome')
})

server.listen(5000)