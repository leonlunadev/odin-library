const myLibrary = [];

function Book(title, author) {
  this.author = author;
  this.title = title;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const bookshelf = document.getElementById("bookshelf");
  console.log("hello");
  for (const book of myLibrary) {
    const card = document.createElement("div");
    card.classList.add("card");
    const title = document.createElement("h1");
    console.log(book.title);
    title.textContent = book.title;
    const author = document.createElement("h2");
    author.textContent = book.author;
    card.appendChild(title);
    card.appendChild(author);
    bookshelf.appendChild(card);
  }
}

const NewBook = document.getElementById("newBook");

NewBook.addEventListener("click", NewBookTest);

function NewBookTest() {
  const container = document.getElementById("container");
  container.classList.remove("container");
}

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  const container = document.getElementById("container");
  container.classList.add("container");

  const newBook = new Book(title, author);

  addBookToLibrary(newBook);

  displayBooks();
});
