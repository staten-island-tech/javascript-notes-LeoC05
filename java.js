//Array.prototype.filter()
//1.Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(function(inventor) {
    if(inventor.year >= 1500 && inventor.year < 1600) {
        return true; //keep it!
    }
});
console.table(fifteen);//will table results
//Array.prototype.map()
//2.Give us an array of the inventor's first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);
//Array.prototype.sort()
//3.Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort(function(firstPerson, secondPerson) {
    if(firstPerson.year > secondPerson.year) {
        return 1;
    } else {
        return -1;
    }
});

//const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

console.table(ordered);
//Array.prototype.reduce()
//4.How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);
//5.Sort the inventors by years lived
const oldest = inventors.sort(function(a,b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    if(lastGuy > nextGuy) {
        return -1;
    } else {
        return 1;
    }
});
console.passed(oldest);
//6.Create a list of boulevards in paris that contain 'de' anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const category = document.querySelector('.mw-category');
const links = [...category.querySelectorAll('a')];//links
const de = links
                .map(link => link.textContent)
                .filter(streetNAme => streetNAme.includes('de'));

//sort Exercise
//Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [alast, afirst] = lastOne.split(', ');
    const [blast, bfirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);

//8.Reduce Exercise
//Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'var', 'truck'];

const transportation = data.reduce(function(obj, item) {
if(!obj[item]) {
    obj[item = 0];
};
obj[item]++;
return obj;
},{})

console.log(transportation);

//Array Cardio Day 2

//Some and Every Checks
//Array.prototype.some() //is at least one person 19?
/*const isAdult = people.some(functtion(person) {
    const currentYear = (newDate()).getFullYear();
    if(currentYear - person.year >= 19) {
        return true;
    }
});*/
const isAdult = people.some(person => {
    const currentYear = (newDate()).getFullYear();
    return currentYear - person.year >= 19;
});
console.log(isAdult);
//Array.prototype.every() //is everyone 19?
const allAdults = people.every(person => {
    const currentYear = (newDate()).getFullYear();
    return currentYear - person.year >= 19;
});
console.log(allAdults);
//Array.prototype.find()
//Find is like filter, but instead returns just the one you are looking for
//find the comment with the ID of 823423
/*const comment = comments.find(function(comment) {
    if(comment.id === 823423) {
        return true;
    }
});*/
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

//Array.prototype.findIndex() //finds the index in its array
//Find the comment with this ID
//delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);
//comments.splice(index, 1); //way 1
const newComments =[ //way 2
    ...comments.slice(0,index),
    ...comments.slice(index+1)
];