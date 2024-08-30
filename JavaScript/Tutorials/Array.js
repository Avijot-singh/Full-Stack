var guestList = ["Avi", "Mandeep", "Harjinder", "Kuljit"];

console.log(guestList[0]); // Retrieving the first item in the array

// Challenge
// Ask the user to type their name and then check if the name is in the array and then alert them if they are or not

const prompt = require('prompt-sync')()

const visitor = prompt("What is your name? ");
let first_name = visitor.slice(0, 1); // Isolating the first letter from the name
const rest_name = visitor.slice(1, visitor.length); // Isolating the rest of the name from the first letter
first_name = first_name.toUpperCase(); //Get the first letter to be uppercasse
complete_name = first_name + rest_name; // Add the name

if (guestList.includes(complete_name)) {
    console.log("Welcome, " + complete_name)
}
else {
    console.log("Sorry you are not in the visitor list");
}