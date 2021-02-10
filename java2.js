//Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    //this is the function body
    console.log('Running Calculate Bill!!');
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
}

//Function call on **Run**
const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotal = calculateBill(wesTotal, wesTaxRate); //whatever arguments will be sent to be parameters in function

function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

//const greeting = sayHiTo('Wes');
//console.log(greeting);

function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') { //'Silly Goose' would be the default incase no arguments are invoked
    return `HEY ${name.toUpperCase()}`;
}

console.log(yell(doctorize('wes')));

const myBill4 = calculateBill(100, undefined, 0.2); //to use default taxRate use undefined
console.log(myBill4)