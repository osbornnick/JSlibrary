let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function() {
  const readString = this.read ? 'read' : 'not read yet';
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}`
}

function addBookToLibrary() {
  const title = prompt('Title: ');
  const author = prompt('Author: ');
  const pages = prompt('Number of pages: ');
  const readString = prompt('Have you read it? (true/false): ')
  if (readString == 'true') {
    const read = true;
  } else {
    const read = false;
  }
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function render() {
  const container = document.querySelector('.container');
  myLibrary.forEach(book => {
    const row = document.createElement('div');
    row.className = 'row';
    const card = document.createElement('div');
    card.className = 'card'
    card.textContent = book.info();
    row.appendChild(card);
    container.appendChild(row);
  })
}

const book = new Book('The Hobbit', 'J.R.R. Tolkien', '295', true);
myLibrary.push(book);
render();

// console.log(book.info());
// console.log(book.constructor);
