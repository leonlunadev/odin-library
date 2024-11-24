const myLibrary = [];

function Book() {}

function addBookToLibrary() {}

function displayBooks() {}

const NewBook = document.querySelector("button");

NewBook.addEventListener("click", NewBookTest);

function NewBookTest(e) {
  const popup = document.createElement("div");
  const formWindow = document.createElement("div");
  const form = document.createElement("form");
  popup.className += "popup";
  formWindow.className += "formWindow";

  const header = document.createElement("h1");
  header.textContent = "Book Information";

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title: ";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Enter book title");
  titleInput.setAttribute("name", "title");

  const authorLabel = document.createElement("label");
  authorLabel.setAttribute("for", "author");
  authorLabel.textContent = "Author: ";

  const authorInput = document.createElement("input");
  authorInput.setAttribute("type", "text");
  authorInput.setAttribute("placeholder", "Enter author's name");
  authorInput.setAttribute("name", "author");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Add Book";

  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(authorLabel);
  form.appendChild(authorInput);
  form.appendChild(submitButton);
  formWindow.appendChild(header);
  formWindow.appendChild(form);
  popup.appendChild(formWindow);
  document.body.appendChild(popup);
}
