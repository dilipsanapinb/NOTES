
const { program } = require('commander');

program
    .version('1.0.0')
    .description('A Simple CLI App')
    .option('-n,--name <name>', ' Your name')
    .option('-a,--age <age>', ' Your age')
    .action((options) => {
        console.log(`Hello, ` + options.name + ' !');
        console.log('Your age, ' + options.age + ' years old.');
    });

program.parse(process.argv);