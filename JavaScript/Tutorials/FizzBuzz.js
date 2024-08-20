/* Write a program that prints the numbers from 1 to 100. But for
multiples of three print "Fizz" instead of the number and for
the multiples of five print "Buzz". For numbers which are
multiples of both three and five print "FizzBuzz". */

//output.push(1); // Adds the item inside push to the array, it always pushes to the end of the array

var output = [];
var num = 1;

function FizzBuzz() {
    if (num % 3 === 0 && num % 5 === 0) {
        output.push("FizzBuzz");
    } else if (num % 5 === 0) {
        output.push("Buzz");
    } else if (num % 3 === 0) {
        output.push("Fizz");
    } else {
        output.push(num);
    }
    num++;
}

for (let i = 0; i < 100; i++) {
    FizzBuzz();
}

console.log(output);
