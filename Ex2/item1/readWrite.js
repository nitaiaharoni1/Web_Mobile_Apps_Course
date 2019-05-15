const fs = require("fs"),
    readFile = process.argv[2],
    writeFile = process.argv[3];

console.log(`Read From: ${readFile}`);
console.log(`Write To: ${writeFile}`);
let reversedContent = fs.readFileSync(readFile).reverse();
fs.writeFileSync(writeFile, reversedContent);