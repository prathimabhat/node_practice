 //creating a big text file
 // const { writeFileSync } = require('fs')

 // for (let i =0; i< 10000; i++) {
 // 	writeFileSync('./content/big.txt',`hello world ${i}\n`, { flag : 'a'})
 // }
//readStream

const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt',
 {highWaterMark : 90000,
 encoding : 'utf8'});

stream.on('data', (result) => {
    console.log(result)
})
//default size is 64kb
//last buffer - remainder
//highWaterMark -contril size
//const stream = createReadStream('./content/big.txt', { highWaterMark : 90000 })
//const stream = createReadStream('./content/big.txt', { encoding : 'utf8' })

stream.on('error' , (err) => {
    console.log(err)
})

//WriteStram

var http = require('http')
var fs = require('fs')

// http
// .createServer(function (req,res) {
//     const text = fs.readFileSync('./content/very_big.txt','utf8')
//     res.end(text)
// })
// .listen(5000)
// //large chunks of data is sent so it's not preferable

http
.createServer(function (req,res) {
     const fileStream = fs.createReadStream('./content/very_big.txt','utf8');
     fileStream.on('open', () => {
        fileStream.pipe(res)
     })
     fileStream.on('error',(err) => {
        res.end(err)
     })

})
.listen(5000)
//write data in chunks