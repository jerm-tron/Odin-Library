const display = document.querySelector(".library-display");
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".add-books");
const closeModal = document.querySelector(".close");

const myLibrary = [{ title: "hello", author: "jr Elson" }];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const books = new Book("title", "author", pages, "read");
  myLibrary.push(books);
}

function displayBook() {
  myLibrary.forEach((book) => console.log("hello")); //not yet implemented
}

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
