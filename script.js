const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.info = function() {
    //     return `${title} by ${author}, ${pages} pages, ${read}`
    // }
}
function render() {
    let libra = document.querySelector("#library")
    libra.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookele = document.createElement('div');
        bookele.innerHTML = `<p>${book.title}</p>`;
        libra.appendChild(bookele);
    }
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



const addButtonContainer = document.querySelector(".addButtonContainer");
const newBookContainer = document.querySelector('.newBookContainer');
const addNewBook = document.querySelector('#addNewBook');
const cancel = document.querySelector("#cancel");
const submitBtn = document.querySelector("#submitBtn");

addNewBook.addEventListener("click", function(event) {
    event.preventDefault();
    addButtonContainer.style.display = "none";
    newBookContainer.style.display = "block";
})

document.querySelector("#cancelBtn").addEventListener("click", function () {
    newBookContainer.style.display = "none";
    addButtonContainer.style.display = "block";
})
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    addBookToLibrary()
})

