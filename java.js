function wait(ms = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

async function go() { //async only works with async functions
    console.log('Starting');
    await wait(2000); //await only works with async functions
    console.log('running');
    await wait(2000);
    console.log('ending');
}

go();

// Function declaration
async function fd( ){}

//arrow functions
const arrowFn = async () => {}

//callback functions
window.addEventListener('click', async function () {

})

//methods
const person = {
    sayHi : async function() {},
    //method shorthand
    async sayHello() {},
    //function property
    sayHey : async () => {},
}


function makePizza(toppings = []) {
    const pizzaPromise = new Promise(function(resolve, reject) {
        //reject if people try with pineapple
        if(toppings.includes('pineapple')){
            reject('Seriously? Get out.')
        }
        const amountOfTimeToBake = 500 + (toppings.length * 200);
        //wait 1 second for pizza to cook:
        setTimeout(function() {
            //when you are ready, you can resolve this promise
            resolve(`Here is your pizza with toppings ${toppings.join(' ')}`);
        }, amountOfTimeToBake);
        //if something went wron,g we can reject this promise
    });
    return pizzaPromise; //return immediately
}

async function makeDinner() {
    const pizzaPromise1 = makePizza(['pepperoni']); //will log a promise without an await
    const pizzaPromise2 = makePizza(['mushrooms']); 
    const [pep, mush] = await Promise.all([pizzaPromise1, pizzaPromise2]);//does both promises at the same time and destructures them
    console.log(pep,mush);
}

makeDinner();