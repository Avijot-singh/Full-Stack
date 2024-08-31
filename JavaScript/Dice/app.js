var randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);

var randomDiceImage = "dice" + randomNumber + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var img1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);