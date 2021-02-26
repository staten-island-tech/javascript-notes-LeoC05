/*let names = ['Ania', 'Dave', 'Hannah', 'Bob']

names.forEach(name => {
    console.log(name + ' is the best!')
})*/

const name = ['wes', 'kait', 'snickers'] //array

console.log(names[1]); //an array starts on 0; 0 = wes 1 = kait 2 = snickers
console.log(names.length); //how many items in an array
console.log(names[names.length - 1]); //takes the total and subtracts 1 for last item

names.push('lux'); //adds a new item to the original in the back
console.log(names);
const names2 = [...names, 'lux'];//new copy
names.unshift('poppy');//adds new item to the original in the front
console.log(names);
const names3 = ['poppy', ...names];//new copy

const bikes = ['bianchi', 'miele', 'panasonic', 'miyata',];
const newBikes = [ //adds benotto to the middle of a copy
    ...bikes.slice(0,2),
    'benotto',
    ...bikes.slice(2)//2nd item till the end
];
console.log(newBikes);
const newBikes2 = [//removes panasonic
    ...newBikes.slice(0,3),
    ...newBikes.slice(4)
];
console.log(newBikes2);

//
const comments = [
    { text: 'Cool Beans', id 123},
    { text: 'Love this', id 133},
    { text: 'Neato', id 233},
    { text: 'good bikes', id 333},
    { text: 'so good', id 433},
];
function deleteComment(id, comments) {
    //first find index of the item in the array
    const commentIndex = comments.findIndex(comment => comment.id === id);
    return[
        ...comments.slice(0, commentIndex),
        ...comments.slice(commentIndex + 1),
    ];
    //make a new array without that item in it
    //return our new array
    
}
const kaitIndex = names.findIndex(name => name === 'kait'); //find the index of a name in the array
const newNamesWithOutKai = [
    //get everything up to kai index
    ...names.slice(0,kaitIndex),
    //everything after Kait index
    ...names.slice(kaitIndex + 1)
];//.flat(); //another way to flatten if ... wasn't there
//const newNames999 = newNAmesWithOutKai.flat(); //helps flatten out array if the ... weren't there
console.log(newNamesWithOutKai);
console.log(kaitIndex);
console.log(names[kaitIndex]);


//Mutation Method
const numbers = [1,2,3,4,5,6,7,8,9];
numbers.splice(3,2); //changes original
console.log(numbers);

//numbers.reverse(); //reverses the array around
console.log(numbersBackwards); //original array also has been reversed
//anytime you want to use a mutation method and not mutate the original array
//we need to take a copy of the array
const numbersReversed =[...numbers]; //copies an array
numbersReversed.reverse();
//Imutable
const pizzaSlice = numbers.slice(2,4);//doesn't change original
console.log(pizzaSlice); //includes out 2nd and 4th item

//splice = mutable slice = immutable