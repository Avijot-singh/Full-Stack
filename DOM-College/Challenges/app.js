let headin_two = document.querySelector("h2");
console.dir(headin_two.innerText);

headin_two.innerText = headin_two.innerHTML + " From Avi Singh";

let divs = document.querySelectorAll(".box");
let idx = 1
for (div of divs) {
    div = `This is the new unique value ${idx} `;
    idx++;
}
// The for loop and the bellow does the same thing | Loop is good as if there were more divs than it be hard writing one by one
divs[1].innerText = "New unique value one";
console.dir(divs[1]);
console.dir(divs);
