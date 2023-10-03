const myLibrary = [];

function Book(title,author,pages,status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${status}`
    }

}

const book1 = new Book ('kata', 'salvahe', 123, 'read')




const newbookcontainer = document.querySelector('.newbookcontainer');
const addnewbook = document.querySelector('#addnewbook');


addnewbook.addEventListener("click", function() {
    newbookcontainer.style.display = "block";
})


function addBookToLibrary() {
    

}