const path = require('path')

// returns platform specific separator

console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//basename
const base = path.basename(filePath)
console.log(base)

//returns absolute path

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)