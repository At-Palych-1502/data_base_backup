const test = require("./instance/canteen.json");
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let flag = false;
rl.question('Your Name: ', (answer) => {
    console.log(test.q);
    flag = true;
    rl.close();
});