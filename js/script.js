let myLibrary = [
  new Book('The Hobbit', 'J.R.R. Tolkien', '295', true),
  new Book('Prep', 'Curtis Sittenfeld', '403', false),
  new Book('Becoming', 'Michelle Obama', '400', false),
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function() {
  const readString = this.read ? 'read' : 'not read yet';
  return `by ${this.author}, ${this.pages} pages, ${readString}`
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
  const booklist = document.querySelector('.booklist');
  myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.className = 'card'
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const cardTitle = document.createElement('h5')
    cardTitle.className = 'card-title';
    cardTitle.textContent = book.title;
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = book.info();
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody)
    booklist.appendChild(card);
  })
}

render();

// console.log(book.info());
// console.log(book.constructor);
