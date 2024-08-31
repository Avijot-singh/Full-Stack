let newBtn = document.createElement("button");
newBtn.innerText = "click Me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);

let para = document.querySelector("p");
console.dir(para.getAttribute);

// We use classlist to add a class 
para.classList.add("newClass");