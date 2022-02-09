const http = require('http')

const server = http.createServer((req,res) =>{
	//console.log(req)

	if(req.url === '/'){
		res.end('Welcome home')
	}
	if(req.url === '/about'){
		res.end('About us')
	}
	res.end(`
		<h1> Oops!</h1>
		<p>page not found</p>
		<a href ="/">Home</a>`)
})

//port
server.listen(5000)