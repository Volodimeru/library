const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
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
const newBookContainer = document.querySelector('.newBookContainer');
const addBookBtn = document.querySelector('#addNewBook');
const submitBtn = document.querySelector("#submitBtn");


addBookBtn.addEventListener("click", function(event) {
    event.preventDefault();
    addButtonContainer.style.display = "none";
    newBookContainer.style.display = "block";
})

cancelBtn.addEventListener("click", function (event) {
    event.preventDefault();
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
    newBookContainer.style.display = "none";
    addButtonContainer.style.display = "block";
})

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (title.value != "" && author.value != "") {
        newBookContainer.style.display = "none";
        addButtonContainer.style.display = "block";
        contentContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        content.style.display = "block";
        addBookToLibrary()
        }
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
})
