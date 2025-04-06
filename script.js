// Stores all objects
const myLibrary = [];

// Used to make sure the books datasets always match the index of the myLibrary array
let bookCounter = 0;
let lastRemovedBookIndex = -1;

class Book {
    constructor(title, author, pages, read, yearPublished)
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.yearPublished = yearPublished;
    }
}

const bookSection = document.querySelector('.books-section');

const addToLibraryButton = document.querySelector('.addBook');

const book1 = new Book('Fey Evolution Merchant', 'Amber Button', 3200, false, 2020);
const book2 = new Book('Supreme Lord: I can extract everything!', 'HideousGrain', 1024, false, 2023);
const book3 = new Book("Atticus's Odyssey: Reincarnated Into A Playground", 'RealmWeaver', 745, false, 2023);

// Adding 3 preadded books
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


function updateBookIndex(index)
{
    let books = bookSection.children;
    for (let i = index; i < myLibrary.length; i++)
    {
        books[i].dataset.bookNum = books[i].dataset.bookNum - 1;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    const currentBook = document.createElement('div');
    currentBook.classList.add('book');
    currentBook.dataset.bookNum = bookCounter;

    const innerLayer = document.createElement('div');
    innerLayer.classList.add('inner-layer');
    innerLayer.dataset.flipped = false;

    currentBook.addEventListener('click', ()=> {
    if (innerLayer.dataset.flipped === 'false')
        {
            innerLayer.style.cssText = 'transform: rotateY(180deg)';
            innerLayer.dataset.flipped = true;
    
        }
        else if (innerLayer.dataset.flipped === 'true')
        {
            innerLayer.dataset.flipped = false;
            innerLayer.style.cssText = 'transform: rotateY(360deg)';
        }
    });
    // Back of book card
    const back = document.createElement('div');
    back.classList.add('back');
    
    const rightSide =  document.createElement('div');
    rightSide.classList.add('right-side');
    const leftSide = document.createElement('div');
    leftSide.classList.add('left-side');

   let leftDiv1 = document.createElement('div');
   let leftDiv2 = document.createElement('div');
   let leftDiv3 = document.createElement('div');
   let leftDiv4 = document.createElement('div');
   let leftDiv5 = document.createElement('div');

   leftDiv1.textContent = 'Title: ';
   leftDiv2.textContent = 'Author: ';
   leftDiv3.textContent = 'Published: ';
   leftDiv4.textContent = 'No. of pages: ';
   leftDiv5.textContent = 'Read: ';

   let rightDiv1 = document.createElement('div');
   let rightDiv2 = document.createElement('div');
   let rightDiv3 = document.createElement('div');
   let rightDiv4 = document.createElement('div');
   let rightDiv5 = document.createElement('div');

   rightDiv1.textContent = book.title;
   rightDiv2.textContent = book.author;
   rightDiv3.textContent = book.yearPublished;
   rightDiv4.textContent = book.pages;

   if (book.read)
   {
       rightDiv5.textContent = 'Read';
   }
   else {
    rightDiv5.textContent = 'Unread';
   }
   
   leftSide.appendChild(leftDiv1);
   leftSide.appendChild(leftDiv2);
   leftSide.appendChild(leftDiv3);
   leftSide.appendChild(leftDiv4);
   leftSide.appendChild(leftDiv5);

   rightSide.appendChild(rightDiv1);
   rightSide.appendChild(rightDiv2);
   rightSide.appendChild(rightDiv3);
   rightSide.appendChild(rightDiv4);
   rightSide.appendChild(rightDiv5);

   back.appendChild(leftSide);
    back.appendChild(rightSide);
    
    // Front of book card
    const front = document.createElement('div');
    front.classList.add('front');
    
    const headings = document.createElement('div');
    headings.classList.add('heading-section');

    const bookTitle = document.createElement('h2');
    bookTitle.classList.add('title');
    bookTitle.textContent = book.title;

    const authorName = document.createElement('h3');
    authorName.classList.add('author');
    authorName.textContent = book.author;

    const buttons = document.createElement('div');
    buttons.classList.add('button-section');

    const removeButton = document.createElement('button');
    removeButton.id = 'remove';

    const markReadButton = document.createElement('button');
    markReadButton.classList.add('read');
    markReadButton.dataset.read = 'false';

    markReadButton.addEventListener('click', (event)=> {
        if (markReadButton.dataset.read === 'false')
            {
                markReadButton.style.cssText = 'background-image: url(./imgs/read-hover.svg)';
                markReadButton.dataset.read = 'true';
                rightDiv5.textContent = 'Read';

            }
            else if (markReadButton.dataset.read === 'true')
            {
                markReadButton.style.cssText = 'background-image: url(./imgs/read.svg)';
                markReadButton.dataset.read = 'false';
                rightDiv5.textContent = 'Unread';

            }
        event.stopPropagation();
    });
    
    if (book.read)
    {
        markReadButton.style.cssText = 'background-image: url(./imgs/read-hover.svg)';
        markReadButton.dataset.read = 'true';
    }
    
    headings.appendChild(bookTitle);
    headings.appendChild(authorName);
    
    buttons.appendChild(removeButton);
    buttons.appendChild(markReadButton);
    
    front.appendChild(headings);
    front.appendChild(buttons);
    
    innerLayer.appendChild(front);
    innerLayer.appendChild(back);

    currentBook.appendChild(innerLayer);
    
    bookSection.appendChild(currentBook);

    bookCounter++;

    removeButton.addEventListener('click', function() {

        index = currentBook.dataset.bookNum;
        currentBook.remove();
        bookCounter--;
        lastRemovedBookIndex = index;
        
        removeBookFromLibrary(index);
        updateBookIndex(index);
    });
}

function removeBookFromLibrary(index){
    myLibrary.splice(index, 1);
}

function togglePopup() {
    const overlay = document.getElementById('popup-overlay');
    overlay.classList.toggle('show');
}


const form = document.querySelector('.add-book');
form.addEventListener('submit', (e)=> {
    e.preventDefault();

    let bookName = document.querySelector('#Title');
    let bookAuthor = document.querySelector('#Author');
    let publishYear = document.querySelector('#Publish');
    let pages = document.querySelector('#Pages');
    let read = document.querySelector('#Read-Book').checked;

    const newBook = new Book(bookName.value, bookAuthor.value, pages.value, read, publishYear.value);
    addBookToLibrary(newBook);
    togglePopup();

    form.reset();
});






