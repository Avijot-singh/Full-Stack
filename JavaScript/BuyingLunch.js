/* You are going to write a function which will select a random name from a list of names. The person selected will have to pay for
everybody's food bill.*/

let names = ['Avi', 'John', 'Jenny', 'Harjinder', 'Kuljit'];

function whosPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}

let lunch = whosPaying(names);
console.log(lunch)