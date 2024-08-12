

function fibonacciGenerator(n) { // n is the number of items in the sequenc. So if fibonacciGenerator(3) it should give the output of [0,1,1]
    let output = [];
    if (n === 1) {
        output = [0]
    }
    else if (n === 2) {
        output = [0, 1]
    }
    else {
        output = [0, 1];
        for (var i = 2; i < n; i++) {
            output.push(output.length - 2 + output.length - 1);
        }
    }
    return output

}
var fg = fibonacciGenerator(3)
console.log(fg);