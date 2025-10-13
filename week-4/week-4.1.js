/*
Assignments #1 - Create a cli

Create a `command line interface` that lets the user specify a file path and the nodejs process counts the number of words inside it.

Input - node index.js   /Users/deep/a.txt
Output - You have 10 words in this file

Command - `node index.js count_words filePath`
*/

const fs = require('fs');       //inetrnal modules 
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')      //name of the program 
  .description('CLI to do file based tasks')        //description of program 
  .version('0.8.0');            //version of the program

program.command('count')            //yeh program me jo..count command bnaye hai jo number of words ko count krta hai     
  .description('Count the number of words in a file')       //yeh count ka description 
  .argument('<file>', 'file to count')          //yeh woh argument jo function ko chhaiye woh count command ko execute krne ke liye chahiye
  .action((file) => {           //ab yeh uska action ki like woh count command execute hua toh karna kya hai
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const word = data.split(' ').length;
        console.log(`There are ${word} words in ${file}`);
      }
    });
  });

program.parse();

