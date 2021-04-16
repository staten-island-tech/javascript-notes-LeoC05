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


makePizza(['pepeproni']).then(function(pizza){ //happens sequentially
    console.log(pizza);
    return makePizza(['ham', 'cheese']);
}).then(function (pizza) {
    console.log(pizza);
    return makePizza(['hot peppers', 'onnion', 'feta']);
}).then(function(pizza) {
    consolge.log(pizza);
    return makePizza(['pineapple']);;
}).then(function(pizza) {
    consolge.log(pizza);
    return makePizza(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']);
}).then(function(pizza) {
    consolge.log(pizza);
    return makePizza();
})
.catch(handleError);//when error happens, the promsie chain will stop

//Run them Concurrently
/* const pizzPromise1 = makePizza(['hot peppers', 'onnion', 'feta']);
const pizzPromise2 = makePizza(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']);
const pizzPromise3 = makePizza(['ham', 'cheese']);

const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzPromise3]);//a static method; adding all promises into a single promise

dinnerPromise.then(function(pizzas) {
    const [hottie, garbagePail, hamAndCheese] = pizzas;//destructures each argument into one by one

    console.log(hottie, garbagePail, hamAndCheese);//waits for all 3 to be done and then logs
});

const firstPizzaPromise = Promise.race([pizzaPromise1, pizzaPromise2, pizzPromise3]);

firstPizzaPromise.then(function(pizza) {
    console.log('You must be hungry! Here is the first one ready');
    console.log(pizza);//logs the first one to finish
}) */


/* const pepperoniPromise = makePizza(['pepperoni']);
const canadianPromise = makePizza(['pepperoni', 'mushrooms', 'onions']);
pepperoniPromise.then(function(pizza) {// use .then to get the resolved promise ; only runs when promise is ready
    console.log('Ahh got it!');
    console.log(pizza);
}); */

function handleError(err) {
    console.log('Ohh nooooooo!!');
    console.log(err);
}

makePizza(['cheense', 'pineapple'])
    .then(pizza => { //will only resolve when promise was successful
    console.log(pizza);
}).catch(handleError);//will run if promise was rejected or errored


const p1 = makePizza(['pep']);
const p2 = makePizza(['pineapple']);

const dinnerPromise2 = Promise.allSettled([p1, p2]);//will tell you errors and rejects without stopping others

dinnerPromise2.then(results => {
    console.log(resultes);
})