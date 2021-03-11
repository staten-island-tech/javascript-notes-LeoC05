const bookList = document.querySelector('#book-list');

console.log('the parent node is:', bookList.parentNode); 
console.log('the parent element is:', bookList.parentElement.parentElement);

console.log(bookList.children);


console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next element sibling is:', bookList.nextElementSibling);
console.log('book-list previous sibling is:', bookList.previousSibling);
console.log('book-list previous element sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';

var h2 = document.querySelector('#book-list h2');

h2.addEventListener('click', function(e) { //listens for click event on h2
    console.log(e.target); //tells target of event
    consolge.log(e);
});

var btns = document.querySelectorAll('#book-list .delete')//references all delete buttons

Array.from(btns).forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li) //li's parent remove child
    });
});

const link = document.querySelector('#page-banner a');
link.addEventListener('click', function(e) { //prevents link from default action whic his navigating to other website
    e.preventDefault();
    console.log('navigation to', e.target.textContent, 'was prevented');
});

const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});


//add book-list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e) { //submit is added to the form, not the button
    e.preventDefault();//normally would refresh the page, now prevented
    const value = addForm.querySelector('input[type="text"]').value
    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});


