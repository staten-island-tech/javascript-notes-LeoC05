const age = 10;

if (age >= 18){ //age === to check for a value
    console.log("You are good to go!") //run this if > 18
} else if (age < 15) {
    console.log("Wow you are really young... why are you even here?") //run this if < 15
}
else{
    console.log("You are not old enough") //run this if not > 18 and not < 15
}

const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 && dice2 === 6) { //use && for and and || for or
    console.log("You rolled a double");
} else{
    console.log("You didn't");
}