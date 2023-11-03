const myLibrary = [];

class Book {
    constructor(title,author,pages,read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    toggleRead() {
        this.read = !this.read;
    }
}
function render() {
    let library = document.querySelector("#library")
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookelement = document.createElement('div');
        bookelement.setAttribute("class", "bookelement")
        bookelement.innerHTML = `
        <div>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>${book.read ? "Read" : "Not read yet"}</p>
        <p id="doublebut">
        <button id="toggleBtn" class="btn" onclick="toggleRead(${i})">Change status</button>
        <button id="removeBtn" class="btn" onclick="removeBook(${i})">Remove book</button>
        </p>
        </div>
        `;
        library.appendChild(bookelement);
    }
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function removeBook(index) {
    myLibrary.splice(index,1);
    if (myLibrary.length <1 ) {
        content.style.display = "none";
    }
    render();
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    render();
}

const contentContainer = document.querySelector(".contentContainer");
const content = document.querySelector(".content");
const addButtonContainer = document.querySelector(".addButtonContainer");
const newBookContainer = document.querySelector(".newBookContainer")
const addBookBtn = document.querySelector('#addNewBook');
const submitBtn = document.querySelector("#submitBtn");
const cancelBtn = document.querySelector("#cancelBtn")
const sidebarContent = document.querySelector('.sidebarContent')
const myform = document.querySelector('#kata')



addBookBtn.addEventListener("click", function(event) {
    addButtonContainer.style.display = "none";
    newBookContainer.style.display = "block";
})




document.addEventListener("click", function (event) {
    if (event.target.id === "cancelBtn") {
        clearInputsFields()
        newBookContainer.style.display = "none";
        addButtonContainer.style.display = "block";
    }
})


function addBook () {
    newBookContainer.style.display = "none";
    addButtonContainer.style.display = "block";
    contentContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    content.style.display = "block";
    addBookToLibrary()
    clearInputsFields()

}


myform.addEventListener("submit", (event) => {
    event.preventDefault();
    addBook()
})


function clearInputsFields() {
title.value = "";
author.value = "";
pages.value = "";
read.checked = false;
}


  