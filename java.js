//document
document.getElementById('page-banner'); //gets element with id page-banenr
var banner = document.getElementById('page-banner'); //stores element into variable
document.getElementsByClassName('title'); //gets elements with the class of title
var titles = document.getElementsByClassName('title'); //able to retrieve indexes like an array
var lis = document.getElementsByTagName('li'); //gets all elements of li

for(i=0; i < titles.length; i++) { //cycles through html collection
    console.log(titles[i]);
}

titles.forEach(function(item) {
    console.log(item);
}) //errors because this is not an array but an html collection

console.log(Array.isArray(titles)); //passes true if array, false if not
console.log(Array.isArray(Array.from(titles)));//Creates an array from titles html collection

Array.from(titles).forEach(function(item) {
    console.log(item);
}) //works because turned into array


$('#wrapper');//grabs wrapper element
document.querySelector('#wrapper'); //grabs wrapper element
const wrap = document.querySelector('#wrapper'); //saves it to variable
console.log(wrap);

const wmf = document.querySelector('#book-list li:nth-child(2) .name')//grabs li in book-list 2nd child with class of name
console.log(wmf);

var books = document.querySelector('#book-list li .name');
console.log(books);// only grabs one because only grabs first

books = document.querySelectorAll('#book-list li .name'); //this grabs all now

Array.from(books).forEach(function(book) { //turns node list into an array and cycles through it
    console.log(book);
})




Array.from(books).forEach(function(book) {
    //book.textContent = 'test'; //changes text content to test
    book.textContent += ' (book title)'; //append/add text content to test
})

const bookList = document.querySelector('#book-list');
//console.log(bookList.innerHTML);//logs all html inside #book-list
bookList.innerHTML = '<h2>Books and more books...</h2>'; //replaces content with the new h2
bookList.innerHTML += '<p>This is how you add HTML</p>';//appends/adds to the innerHTML