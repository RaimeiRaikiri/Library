const myLibrary = [];
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
const book1 = new Book('Fey Evolution Merchant', 'Amber Button', 3200, false, 2004);

addToLibraryButton.addEventListener('click', () => addBookToLibrary(book1));

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

    removeButton.addEventListener('click', function() {
        button = document.getElementById(this.id);
        book = button.parentElement.parentElement;
        index = book.dataset.bookNum;
        book.remove();
        bookCounter--;
        lastRemovedBookIndex = index;
        
        removeBookFromLibrary(index);
        updateBookIndex(index);
    });

    const markReadButton = document.createElement('button');
    markReadButton.classList.add('read');

    headings.appendChild(bookTitle);
    headings.appendChild(authorName);

    buttons.appendChild(removeButton);
    buttons.appendChild(markReadButton);


    currentBook.appendChild(headings);
    currentBook.appendChild(buttons);


    bookSection.appendChild(currentBook);
    bookCounter++;
}

function removeBookFromLibrary(index){
    myLibrary.splice(index, 1);
}
