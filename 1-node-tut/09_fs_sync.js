const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/subfolder/test.txt','utf8');
console.log(first,second)


//writing a file
// writeFileSync('./content/result-sync.txt',
// 	`Here is the result : ${first},${second}`
// 	)

//Appending text to a file
writeFileSync('./content/result-sync.txt',
	`Here is the result : ${first},${second}`,
	{ flag : 'a' }
	)