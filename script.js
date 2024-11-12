const myLibrary = [];

function Book() {}

function addBookToLibrary() {}

function displayBooks() {}

const NewBook = document.querySelector("button");

NewBook.addEventListener("click", NewBookTest);

function NewBookTest() {
  const NewDiv = document.createElement("div");
  NewDiv.appendChild(document.createTextNode("New Book!"));
  document.body.appendChild(NewDiv);
}
