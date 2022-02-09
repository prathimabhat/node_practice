const express = require('express')
const app = express()

//this callback function is performed every time a user makes a get request on our domain

app.get('/' , (req,res) => {
	res.status(200).send('Home page')
})

app.get('/about', (req,res) => {
	res.status(200).send('About page')
})

app.all('*',(req,res) => {
	res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, () => {
	console.log('server running on port 5000')
})

//http methods app.get, app.post, app.put, app.delete

