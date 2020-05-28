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
  return `by ${this.author} <br /> ${this.pages} pages <br />`
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function render() {
  const booklist = document.querySelector('.booklist');
  booklist.innerHTML = ""; // clear
  myLibrary.forEach((book, i) => {
    const card = document.createElement('div');
    card.className = 'card'
    card.setAttribute('data', i)
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const cardTitle = document.createElement('h5')
    cardTitle.className = 'card-title';
    cardTitle.textContent = book.title;
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerHTML = book.info();
    const removeButton = document.createElement('button');
    removeButton.className = 'deleteButton';
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('data', i);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(removeButton);
    card.appendChild(cardBody)
    booklist.appendChild(card);
  })

  document.querySelectorAll('.deleteButton').forEach(btn => {
    btn.addEventListener("click", e => {
      removeBook(e);
    })
  });
}

function removeBook(e) {
  const i = e.target.attributes.data.value;
  myLibrary.splice(i, 1);
  render();
}

render();

document.querySelector('form').addEventListener("submit", e => {
  e.preventDefault();
  const elements = e.target.elements;
  const title = elements.title.value;
  const author = elements.author.value;
  const pages = elements.pages.value;
  const read = elements.read.checked;
  addBookToLibrary(title, author, pages, read);
  render();
  e.target.reset();
})
// console.log(book.info());
// console.log(book.constructor);
