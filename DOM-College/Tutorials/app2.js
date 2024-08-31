let divs = document.querySelector('div');
console.dir(divs);
let para = document.querySelector('p');
// This sets the attribute, bellow changes para class to 123

console.log(para.setAttribute("class", "123"));
console.log(para.getAttribute("class"))

let id = divs.getAttribute("id");
console.log(id);
let att = divs.getAttribute("name");
console.log(att);

// Above is to get an attribute value


let div = document.querySelector('div');
// After style we can write the css attribute but in camel case and without hiphen background-color -> backgroundColor
div.style.backgroundColor = "green";
div.style.fontSize = "26px";
div.innerText = "Hello";
// This style allows us to change css in JS

// Insert Elements

//node - append(eI) adds at the end of node(inside)
//node.prepend(el) adds at the start of node(inside)
//node.before(eI) adds before the node(outside)
//node.after(el) adds after the node(outside)

// To do this first we create and then add
// To create lets say a button
let newButton = document.createElement("button");
newButton.innerText = "Click me!";
// Now the button is created but how do we show it on the screen or to the user
// For this we have to add it in the tree side model, so lets select the div

let d = document.querySelector("div");
div.append(newButton); // This will put the button in the last

let heading = document.createElement("h1");
heading.innerHTML = "<i> Hey I am a heading</i>";

document.querySelector("body").prepend(heading);

// To remove
let p = document.querySelector("p");
p.remove();

// Lerarn append child and remove child