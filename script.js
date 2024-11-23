const myLibrary = [];

function Book() {}

function addBookToLibrary() {}

function displayBooks() {}

const NewBook = document.querySelector("button");

NewBook.addEventListener("click", NewBookTest);

function NewBookTest(e) {
  const popup = document.createElement("div");
  const form = document.createElement("div");
  popup.className += "popup";
  form.className += "form";
  popup.appendChild(form);
  document.body.appendChild(popup);
}
