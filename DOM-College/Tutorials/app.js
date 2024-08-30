let heading = document.getElementById("heading");
console.dir(heading);

let secondheading = document.getElementsByClassName("small"); // Returns -> HTML Collection -> Array
console.dir(secondheading);


let tags = document.getElementsByTagName("p");
console.dir(tags);

// We can use the ones above, or there is a better option of using a query selector

// document.querySelector("myid /myClass/ tag") Returns first element
// document.querySelectorAll("myid /myClass/ tag") Returns a NodeList


let firstEL = document.querySelector("p");
console.dir(firstEL); // firstEL.tagName | tagName : returns tag for element nodes