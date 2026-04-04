//Create a  server that run in port

//Http vs Https
import chalk from 'chalk';
import http from 'http';

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Hello World');
//         res.end();
//     }
// });

// server.listen(3100, 'localhost', () => {
//     console.log('listening on port 3000');
// });

//http



//route for homepage
// req: request - data send by user
// res: response - data send back to user(data send by server)
const server = http.createServer((req,res)=>{
    // console.log(req)
    res.end('Hello World');
});

server.listen(3450, 'localhost', () => {
    // console.log('listening on port 3450');
    console.log('listening on port 3450');
});

console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

console.log(chalk.red('Hello world!'));
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
//https


// 1. A Simple Smiley Face
console.log('\n--- Terminal Emoji ---');
console.log(chalk.yellow('      XXXXX      '));
console.log(chalk.yellow('    X       X    '));
console.log(chalk.yellow('   X  ') + chalk.black.bgWhite('O') + chalk.yellow('   ') + chalk.black.bgWhite('O') + chalk.yellow('  X   '));
console.log(chalk.yellow('   X    ^    X   '));
console.log(chalk.yellow('   X  ') + chalk.red('\\___/') + chalk.yellow('  X   '));
console.log(chalk.yellow('    X       X    '));
console.log(chalk.yellow('      XXXXX      '));

// 2. A Minecraft Creeper (Using Background Colors as Pixels)
const grn = chalk.bgGreen('  '); // Two spaces to make a square "pixel"
const blk = chalk.bgBlack('  ');

console.log('\n--- Blocky Cartoon ---');
console.log(grn + grn + grn + grn + grn + grn + grn + grn);
console.log(grn + blk + blk + grn + grn + blk + blk + grn);
console.log(grn + blk + blk + grn + grn + blk + blk + grn);
console.log(grn + grn + grn + blk + blk + grn + grn + grn);
console.log(grn + grn + blk + blk + blk + blk + grn + grn);
console.log(grn + grn + blk + blk + blk + blk + grn + grn);
console.log(grn + grn + blk + grn + grn + blk + grn + grn);
console.log(grn + grn + grn + grn + grn + grn + grn + grn);