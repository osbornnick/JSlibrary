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

}

function render() {
  myLibrary.forEach(ele => {

  })
}

const book = new Book('The Hobbit', 'J.R.R. Tolkien', '295', true);
console.log(book.info());
console.log(book.constructor);
