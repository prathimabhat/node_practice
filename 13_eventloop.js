const { readFile } = require('fs')

console.log('started first task')

//check file path

readFile('./content/first.txt','utf8', (err,result) => {
	if(err) {
		console.log(err)
		return
	}
	console.log(result)
	console.log('completed first task')
})
console.log('starting next task')

//example 2
//started operating system process
console.log('first')
setTimeout(() => {
	console.log('second')
},0)

console.log('third')
//completed and exited operating system process

//first third second

//example 3
setInterval(() => {
	console.log('hello world')
},2000)
console.log('I wil run first')
//process stays alive unless
//kill process ctrl c
//unexpected error
//I wil run first
// hello world
// hello world
// hello world
// hello world
// hello world
// hello world
// hello world..... this is because setInterval is asynchronous

//example 4
const http = require('http')

const server = http.createServer((req,res) => {
	console.log('request event')
	res.end('Hello World')
})

server.listen(5000, () => {
	console.log('Server listening on port 5000...')
})