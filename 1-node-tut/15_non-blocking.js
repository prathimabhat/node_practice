//const { readFile,writeFile } = require('fs');

//using async await
//const util = require('util');

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
// const start = async() =>{
// 	try{
// 		const first = await readFilePromise('./content/first.txt','utf8');
// 		const second = await readFilePromise('./content/subfolder/test.txt','utf8');
// 		await writeFilePromise('./content/result-mind-grenade.txt',`THIS IS COOL!`)
// 		console.log(first,second)
	
// 	} catch (error) {
// 		console.log(error)
// 	}
	
// }
// start()

//using async await meth 2
const { readFile,writeFile } = require('fs').promises;

const start = async() =>{
	try{
		const first = await readFile('./content/first.txt','utf8');
		const second = await readFile('./content/subfolder/test.txt','utf8');
		await writeFile('./content/result-mind-grenade.txt',`THIS IS COOL! ${first}, ${second} `,{flag : 'a'})
		console.log(first,second)
	
	} catch (error) {
		console.log(error)
	}
	
}
start()

//using promises

// const getText = (path) =>{
// 	return new Promise( (resolve,reject) =>{
// 			readFile(path,'utf8',(err,data) =>{
// 		if(err){
// 			reject(err)
// 		}else{
// 			resolve(data)
// 		}
// 		})
// 	})
// }
//promises
// getText('./content/first.txt')
// 	.then((result) => console.log(result))
// 	.catch((err) => console.log(err))

