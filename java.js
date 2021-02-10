const name ="Dev Ed";

function logger() { //saves function usage to memory
    console.log(name);
    console.log("Party Time");
    console.log("Party Time");
    console.log("Party Time");
    console.log("Party Time");
}

logger(); //calls the function

function adder(num1, num2) {
    console.log(num1 + num2)
}

adder(5,10); //sends 5 and 10 back to function adder to fill in parameters

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name);

const youtuber = "Traversy Media";

toUpper(youtuber);


const toUpper = () => {  //the function word before parameters can be removed and => can be added after

}

