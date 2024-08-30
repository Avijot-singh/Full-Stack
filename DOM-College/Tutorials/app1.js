let div = document.querySelector("div");
console.dir(div.innerText); // Gives you the pure text of html
console.dir(div.innerHTML); // Gives you all text and its tags
div.innerText = "ABCD"; // Changes the text
// div.innerHTML = <div><i>Hello World</i></div>; can set tags

let heading = document.querySelector("h1");
console.dir(heading.textContent); // Shows even hidden element similar to innerText