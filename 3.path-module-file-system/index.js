const path = require('path');
const  fs = require('fs');
const dataFolder = path.join(__dirname, "data");

// if folder does not exist create new one
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}



const filePath = path.join(dataFolder, 'example.txt');


fs.writeFileSync(filePath, "Hello Ansh 🚀");

console.log("file created");