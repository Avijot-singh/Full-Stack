let btn = document.querySelector('.new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{

    quote: "Quote 1",
    person: "Avi",


}];

btn.addEventListener('click', function ()){
    let random = Math.floor(math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quptes[random].quote;
}