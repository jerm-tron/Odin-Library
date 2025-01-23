const modal = document.querySelector(".modal");
const openModal = document.querySelector(".add-books");
const closeModal = document.querySelector(".close");
const addBook = document.querySelector(".submit-bttn");

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

function displayBooks() {
  const display = document.querySelector(".library-display");
  display.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.classList.add("book-card");
    bookEl.innerHTML = `<p>${book.title}<p>
    <p>Author:${book.author}</p>
    <p>Pages:${book.pages}</p>`;
    display.appendChild(bookEl);
  }
}

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

addBook.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayBooks();
});
