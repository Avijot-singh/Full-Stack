// Allow you to create series of instructions and package them in container block called functions
// Need to call the function to execute it's instructions

/* CREATING THE FUNCTION
    function getMilk(){
        console.log("Set of instructions");
    }
    */

/* CALLING THE FUNCTION 
    getmilk();
    */

function getApple(apple) {   // Round brackets are parenthesis
    console.log("Hey Robot Bring Apples");
    console.log("I will be bringing " + apple + " apples");

}

getApple(4)

function getAge(yourAge) {
    caluclate = 2024 - yourAge
    return caluclate
}

const caluclate1 = getAge(2002); // Argument
console.log(caluclate1);

// Function with expression
const calculateAge2 = function (birthyear) { // Also called anonmous function as it it a function without name
    return 2024 - birthyear;
}

const age = calculateAge2(2002)
console.log(age);

// ARROW FUNCTION
const cal_age = birthYear => 2024 - birthYear; // The value will be automatically returned
const c = cal_age(2002);
console.log(c);

const yearUntilRetirement = birthYear => {
    const age = 2024 - birthYear
    const retirement = 65 - birthYear
    return retirement
}


// Challenge

function getMilk(money) {
    bottles = Math.floor(money / 1.5); // Math.floor rounds the value
    console.log("Buy " + bottles + " bottles of milk");

}
getMilk(20)


function cutFruitPieces(fruit) {
    return fruit * 4;
}

// Functions Calling Other Functions
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));