const http = require('http')
//status code 200 
const server = http.createServer((req,res) => {
	res.writeHead(200,{'content-type':'text/html'})
	res.end('<h1>home page</h1>')
})

server.listen(5000)