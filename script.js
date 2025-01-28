const myLibrary = {};
let numBooks = 0;

function Book(title, author) {
  this.author = author;
  this.title = title;
}

function addBookToLibrary(book) {
  myLibrary[numBooks] = book;
}

function displayBooks() {
  const bookshelf = document.getElementById("bookshelf");

  const card = document.createElement("div");
  card.classList.add("card");

  //<svg id="close-new-book" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute(
    "d",
    "M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"
  );

  svg.appendChild(path);

  const title = document.createElement("h1");

  title.textContent = myLibrary[numBooks].title;
  const author = document.createElement("h2");
  author.textContent = myLibrary[numBooks].author;
  card.appendChild(svg);
  card.appendChild(title);
  card.appendChild(author);
  bookshelf.appendChild(card);
  numBooks += 1;
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

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";

  const container = document.getElementById("container");
  container.classList.add("container");

  const newBook = new Book(title, author);

  addBookToLibrary(newBook);

  displayBooks();
});

const closeNewBook = document.getElementById("close-new-book");

closeNewBook.addEventListener("click", (event) => {
  const container = document.getElementById("container");
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  container.classList.add("container");
});

// delete book

// book read
