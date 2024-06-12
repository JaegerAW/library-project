const myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const harryPotter1 = new Book("Harry Potter and The Philosopher's Stone", 'J.K. Rowling', 309, 'not read yet');
const harryPotter2 = new Book('Harry Potter and The Chamber of Secrets ', 'J.K. Rowling', 341, 'not read yet');
const harryPotter3 = new Book("Harry Potter and The Prisoner of Azkaban", 'J.K. Rowling', 435, 'not read yet');
const harryPotter4 = new Book("Harry Poter and The Goblet of Fire", "J.K. Rowling", 734, 'not read yet');
const harryPotter5 = new Book("Harry Potter and The Order of the Phoenix", "J.K. Rowling", 870, 'not read yet');



const deck = document.querySelector('.deck');


//push method to add book to myLibrary
myLibrary.push(harryPotter1);
myLibrary.push(harryPotter2);
myLibrary.push(harryPotter3);
myLibrary.push(harryPotter4);
myLibrary.push(harryPotter5);


function createDeck() {
    while (deck.hasChildNodes()) {
        deck.removeChild(deck.firstChild)};
    for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement('div');


myLibrary[i].index = i;//add index numbers property to every new book.
card.innerHTML = `<div class="card"  id ="book-${i}"">
<div class="title">${myLibrary[i].title}</div>
<div class="author">By ${myLibrary[i].author}</div>
<div class="pages">${myLibrary[i].pages} pages</div>
<div class="read">${myLibrary[i].read}</div>

<button class="delete" onclick="deleteItem(${myLibrary[i].index})">Delete Book</button>


</div>`
deck.appendChild(card);
}
}



createDeck();//create initial deck


function deleteItem(cardIndex) {
    myLibrary.splice(cardIndex,1)

    while (deck.hasChildNodes()) {
        deck.removeChild(deck.firstChild);
    }
createDeck();
}


//start creating the new book button function

//when add new book, const newtitle.textContent = new Book(...);
const newTitle = document.querySelector('#newtitle');
const newAuthor = document.querySelector('#newauthor');
const newPages = document.querySelector('#newpages');
const newHaveRead = document.querySelector('#haveread');
const newNotRead = document.querySelector('#notread');
const addBookBtn = document.querySelector('#addnewbook');

addBookBtn.addEventListener('click', ()=>{
    const newBook = new Book(newTitle.value, newAuthor.value, newPages.value);

 myLibrary.push(newBook);
createDeck();
}
);




