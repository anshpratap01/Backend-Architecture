
const fs = require('fs');

console.log('File start reading');

fs.readFile('hello.txt' , 'utf8' , function(err, data){
    if(err){
        console.log("error" + err);
        return;
    }
        console.log(data);

})

console.log("this will run before the file is read");

