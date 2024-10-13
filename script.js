const myLibrary = [];
//let lastRemovedBookIndex = 

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

// .children
function addBookToLibrary(book) {
    myLibrary.push(book);
    const currentBook = document.createElement('div');
    currentBook.classList.add('book');
    //currentBook.dataset.bookNum = myLibrary.indexOf(book);
    
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

    removeButton.addEventListener('click', function() {xs
        button = document.getElementById(this.id);
        book = button.parentElement.parentElement;
        book.remove();
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
}

function removeBookFromLibrary(book){
   
    if (Number(index) !== -1)
    {
        myLibrary.splice(index, 1);
        bookCount--;
    }
}
