for (var i = 1; i <= 100; i++) {
    console.log(i);
}
console.log("------------------------");
for (let u = 0; u < 2; u++) {
    console.log(u)
}




let output = [];
console.log("------------------------");
function FizzBuzz() {
    for (let count = 1; count <= 100; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        }
        else {
            output.push(count);
        }
    }
    console.log(output);
}
FizzBuzz()