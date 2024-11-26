const myLibrary = [];

function Book() {}

function addBookToLibrary() {}

function displayBooks() {}

const NewBook = document.getElementById("newBook");

NewBook.addEventListener("click", NewBookTest);

function NewBookTest(e) {
  const container = document.getElementById("container");
  container.classList.remove("container");
}

function submitBook() {
  const container = document.getElementById("container");
  container.classList.add("container");
}
