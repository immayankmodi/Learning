//NodeJS documentation: https://nodejs.org/dist/latest-v18.x/docs/api/


//https://nodejs.org/dist/latest-v18.x/docs/api/os.html
const os = require('os');

console.log(os.hostname())
console.log(os.homedir())

//https://nodejs.org/dist/latest-v18.x/docs/api/path.html
const path = require('path');

console.log(path.dirname(__filename))
console.log(path.extname('D:/Learning/Node.js/test.js'))

//https://nodejs.org/dist/latest-v18.x/docs/api/fs.html
const fs = require('fs');
fs.readFile('./readme.txt', 'utf8', (err, data) => {
    //console.log(err, data);
    console.log('Read file is done')
})

// fs.readFile('test.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// })

// fs.writeFile('./text.txt', 'This is test data', () => {
//     console.log('Write to file is done');
// })