// const readLine= require("readLine");
//  enter your name from the terminal..
const readLine = require('node:readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('please enter your name ', (name) => {
    console.log(`hello ${name}`);
    rl.close();
  });

