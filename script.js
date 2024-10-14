// Stores all objects
const myLibrary = [];

// Used to make sure the books datasets always match the index of the myLibrary array
let bookCounter = 0;
let lastRemovedBookIndex = -1;

function Book(title, author, pages, read, yearPublished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.yearPublished = yearPublished;
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

    markReadButton.addEventListener('click', ()=> {
        if (markReadButton.dataset.read === 'false')
            {
                markReadButton.style.cssText = 'background-image: url(./imgs/read-hover.svg)';
                markReadButton.dataset.read = 'true';
            }
            else if (markReadButton.dataset.read === 'true')
            {
                markReadButton.style.cssText = 'background-image: url(./imgs/read.svg)';
                markReadButton.dataset.read = 'false';
            }
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
    
    
    currentBook.appendChild(headings);
    currentBook.appendChild(buttons);
    
    
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

