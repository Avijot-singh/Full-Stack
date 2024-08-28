// Dom Manipulation 
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
// SELECTION
/*
// GetElementID() | select element using their ID
const title = document.getElementById('main-heading');
console.log(title);

// GetElementByClassName()
//const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);
// getElementsByTagName() | Similar to className but returns all the items in order, you can select any css, like class, id and it will just return in order

console.log(listItem);
// querySelector()
const container = document.querySelector('div');
console.log(container)

//querySelectorAll() | Selects all the div containers
const containers = document.querySelectorAll('div');
console.log(containers)

THEORY
Use getElementById() for unique elements with IDs.
Use getElementsByClassName() for selecting multiple elements by class, especially if you need a live collection.
Use getElementsByTagName() when you need all elements of a specific type.
Use querySelector() when you need more flexibility or want to select the first matching element using CSS selectors.
Use querySelectorAll() when you need to select multiple elements using CSS selectors or need more complex selection criteria.
*/
//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// STYLING ELEMENTS
/*
const title = document.querySelector('#main-heading');
title.style.color = 'red'; // Inline styling works on single element
console.log(title);

const listItem = document.querySelectorAll('.list-items');
console.log(listItem);



for(i = 0; i < listItem.length; i++){
    listItem[i].style.fontSize = '2rem'; // This line wont autoamtically work as inline method cant apply it on 5 different items for that we need a loop.
    listItem[i].style.color = 'blue';
}

THEORY
- Use . to select a class for query selectors
- To manipulate multiple items using inline we need to loop it through
*/
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CREATING & REMOVES ELEMENTS
/*
const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Elements
ul.append(li); // Append list item inside ul

// Modifying the text

const firstListItem = document.querySelector('.list-items');

console.log(firstListItem);


console.log(firstListItem.innerText); // Output - Neo The Matrix // THis is used

console.log(firstListItem.textContent); // Output - Neo
                                                                //The Matrix

console.log(firstListItem.innerHTML); // Output - <span> Neo </span> // Not really used for security reasons
                                                                    // The Matrix
li.innerText = 'X-men';

// Modifying Attributes & classes
li.setAttribute('id', 'main-heading'); // Here we have given the li attribute an id of main-heading
li.removeAttribute('id');

const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id'));

// classes 
li.classList.add('list-items'); // Adding class
li.classList.remove('list-items');

console.log(lo.classList.contains('list-items'));

// Remove Elements
li.remove();
*/
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
// TRAVERSING THE DOM
/*

// Select the <ul> element
let ul = document.querySelector('ul');

// Parent Node Traversal
console.log(ul.parentNode); // Logs the parent of <ul>, which is the <div class="container">
console.log(ul.parentElement.parentElement); // Logs the grandparent of <ul>, which is the <body>

// Access the <html> element
const html = document.documentElement;
console.log(html.parentNode); // Logs the parent of <html>, which is the document itself
console.log(html.parentElement); // Logs null because <html> is the root element and has no parent element

// Child Node Traversal: going down the DOM tree
let ull = document.querySelector('ul');

// Logs all child nodes of <ul> (including text nodes like spaces and newlines)
console.log(ull.childNodes);

// Logs the first child node of <ul> (could be an element, text, or comment node)
console.log(ull.firstChild);

// Logs the last child node of <ul> (could be an element, text, or comment node)
console.log(ull.lastChild);

// Modify the background color of the second child element in the <ul> (index 1) to blue
// Use childNodes to select the second node and change its background color
ull.childNodes[1].style.backgroundColor = 'blue';

// Logs only the child elements of <ul> (excludes text nodes)
console.log(ull.children);

// Logs the first child element of <ul> (ignores text and other non-element nodes)
console.log(ull.firstElementChild);

// Logs the last child element of <ul> (ignores text and other non-element nodes)
console.log(ull.lastElementChild);


// Sibling Node Traversal
// Select the <ul> element
let ulll = document.querySelector('ul');

// Select the <div> element (the parent of the <ul>)
const div = document.querySelector('div');

// Logs all child nodes of the <div> element (including text nodes like spaces and newlines)
console.log(div.childNodes);

// Logs the previous sibling of the <ul> element
// This could be a text node (whitespace) if there's a space or newline before the <ul>
console.log(ulll.previousSibling);

// Logs the next sibling of the <ul> element
// This could be a text node (whitespace) if there's a space or newline after the <ul>
console.log(ulll.nextSibling);

// Logs the previous sibling element of the <ul> element
// This returns the previous element node, ignoring text nodes or comments
// If there's no element before <ul>, it will return null
console.log(ulll.previousElementSibling);

// Logs the next sibling element of the <ul> element
// This returns the next element node, ignoring text nodes or comments
// If there's no element after <ul>, it will return null
console.log(ulll.nextElementSibling);
*/
//------------------------------------------------------------------------------------------------------------------------------------------------------------------