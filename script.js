const myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const harryPotter1 = new Book("Harry Potter and The Philosopher's Stone", 'J.K. Rowling', 309, 'No');
const harryPotter2 = new Book('Harry Potter and The Chamber of Secrets ', 'J.K. Rowling', 341, 'No');
const harryPotter3 = new Book("Harry Potter and The Prisoner of Azkaban", 'J.K. Rowling', 435, 'No');
const harryPotter4 = new Book("Harry Poter and The Goblet of Fire", "J.K. Rowling", 734, 'No');
const harryPotter5 = new Book("Harry Potter and The Order of the Phoenix", "J.K. Rowling", 870, 'No');

myLibrary.push(harryPotter1);
myLibrary.push(harryPotter2);
myLibrary.push(harryPotter3);
myLibrary.push(harryPotter4);
myLibrary.push(harryPotter5);








const deck = document.querySelector('.deck');

function createDeck() {
  
  
    while (deck.hasChildNodes()) {
        deck.removeChild(deck.firstChild)};
    for (let i = 0; i < myLibrary.length; i++) {

     
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('div')
    title.classList.add('title');
    title.innerText = myLibrary[i].title;

    const author = document.createElement('div');
    author.classList.add('author');
    author.innerText = "By " + myLibrary[i].author;

    const pages = document.createElement('div');
    pages.classList.add('pages');
    pages.innerText = myLibrary[i].pages + " pages";

    const read = document.createElement('div');
    read.classList.add('read');
    read.innerText = "Read: " + myLibrary[i].read;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = "Delete Book";
    deleteBtn.addEventListener('click', ()=> deleteItem(myLibrary[i].index));

    const changeBtn = document.createElement('button');
    changeBtn.classList.add('changestatus');
    changeBtn.innerText = "Change Read Status";
    changeBtn.addEventListener('click', () => {
        changeStatus(myLibrary[i]);
    });
    
    myLibrary[i].index = i;
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(deleteBtn);
    card.appendChild(changeBtn);
    deck.appendChild(card);
    
    
    
/*
myLibrary[i].index = i;//add index numbers property to every new book.

card.innerHTML = `<div class="card"">
<div class="title">${myLibrary[i].title}</div>
<div class="author">By ${myLibrary[i].author}</div>
<div class="pages">${myLibrary[i].pages} pages</div>
<div class="read">Read: ${myLibrary[i].read}</div>

<button class="delete" onclick="deleteItem(${myLibrary[i].index})">Delete Book</button>

<button class="changestatus" onclick="changeStatus(${myLibrary[i]})">Change Status</button>


</div>`

deck.appendChild(card);
*/
}
}



    function changeStatus(book) {
      if (book.read === "Yes") {
        book.read = "No";
      }
      else if (book.read === "No") {
        book.read = "Yes";
        }

        createDeck();
    };
   




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


//const readStatus = document.querySelector('input[type="radio"]');//this returns null because when the page loads, none of the radio buttons were checked. It won't change even after you've interacted with the radio buttons because it checks only after the page loads.

addBookBtn.addEventListener('click', (event)=>{
    if (newTitle && newAuthor && newPages) {
    const newBook = new Book(newTitle.value, newAuthor.value, newPages.value, document.querySelector('input[type="radio"]:checked').value);
    
    event.preventDefault();
 myLibrary.push(newBook);
createDeck();
}
    else {
        alert("Please input all data!");
        
    };


} 
);




