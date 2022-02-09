const EventEmitter = require('events');

const customEmitter = new EventEmitter() //class

//name of the event is response
customEmitter.on('response', (name,id) => {
	console.log(`data received ${name} with id ${id}`)
}) 
//id and name come from emit

customEmitter.on('response', () => {
	console.log('different event logic')
})

//any number of logics can be listened to and emitted 
customEmitter.emit('response','jon',34)