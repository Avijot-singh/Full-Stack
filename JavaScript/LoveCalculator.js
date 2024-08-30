// function love_calculator(first_name, second_name) {
//     let n = Math.random();
//     n = n * 100 + 1;  // We will never get exactly 6 using this as the range is 0 to 5, so we add one at the end 
//     n = Math.floor(n);
//     console.log("your love is " + n + " percent.");

// }


// love_calculator("Avijot", "John")

// OR
function love_calculator1(first_name, second_name) {
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1; // 1 - 100


    if (loveScore === 100) {
        console.log("You love each other like crazy" + loveScore + "percent");
    }
    else if (loveScore < 5) {
        console.log("Not made for each other: " + loveScore + " percent");
    }
    else {
        console.log("your love is " + loveScore + " percent.");
    }
}
love_calculator1("Avi", "afi")