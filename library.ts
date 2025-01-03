const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitNewBook = document.querySelector("#new-submit")
const formNewBook = document.querySelector("#new-book-form")

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});




class Book{
    title: String;
    author: String;
    pages_number: Number;
    constructor(title, author, pages_number ){
        this.title = title;
        this.author = author;
        this.pages_number = pages_number;
    }
}

const library: Book[] =[]

function addBookToLibrary(title, author, pages_number){
    let added_book = new Book(title, author, pages_number);
    library.push(added_book);
}


function showLibrary(){
    for (const element of library){
        console.log(element.title);
    
    const bookRow = document.createElement("p");
    bookRow.textContent =  `${element.title} by ${element.author} long ${element.pages_number}`
    const libraryDiv = document.querySelector("#library-div")
    libraryDiv.appendChild(bookRow)

    };
}

formNewBook.addEventListener("submit", function(event){
    event.preventDefault()
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    addBookToLibrary(formData.get("title"),formData.get("author"),formData.get("pages_number"));
    showLibrary()


})

addBookToLibrary("Hobit", "Tolkien", 123);
addBookToLibrary("Harry potter", "Rowling", 321);
addBookToLibrary("Dance of Dragons", "GMR", 456);
addBookToLibrary("Witcher", "Sapkowski", 654);
addBookToLibrary("Narnie", "Lewis", 789);

showLibrary()





