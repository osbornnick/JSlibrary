// refactor with Classes

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `by ${this.author} <br /> ${this.pages} pages <br />`
  }

  toggleRead() {
    this.read = !this.read;
  }
}

class Library {
  constructor(books) {
    this.books = Array.from(books);
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(i) {
    this.books.splice(i, 1);
  }
}

myLibrary = new Library([]);

function render() {
  const booklist = document.querySelector('.booklist');
  booklist.innerHTML = ""; // clear
  myLibrary.books.forEach((book, i) => {
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
    removeButton.className = 'deleteButton text-muted';
    removeButton.textContent = 'Remove';

    const toggleRead = document.createElement('button');
    toggleRead.className = 'toggleRead btn';
    toggleRead.textContent = book.read ? 'read' : 'not read';
    toggleRead.classList.add(book.read? 'btn-success' : 'btn-danger');

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(toggleRead);
    cardBody.appendChild(removeButton);
    card.appendChild(cardBody)
    booklist.appendChild(card);
  })

  document.querySelectorAll('.deleteButton').forEach(btn => {
    btn.addEventListener("click", e => {
      const i = e.target.parentElement.parentElement.attributes.data.value;
      myLibrary.removeBook(i);
      render();
    })
  });

  document.querySelectorAll('.toggleRead').forEach(btn => {
    btn.addEventListener("click", e => {
      const i = e.target.parentElement.parentElement.attributes.data.value;
      myLibrary.books[i].toggleRead();
      render();
    })
  })
}

render();

document.querySelector('form').addEventListener("submit", e => {
  e.preventDefault();
  const elements = e.target.elements;
  const title = elements.title.value;
  const author = elements.author.value;
  const pages = elements.pages.value;
  const read = elements.read.checked;
  myLibrary.addBook(new Book(title, author, pages, read));
  render();
  e.target.reset();
})
