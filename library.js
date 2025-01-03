var dialog = document.querySelector("dialog");
var showButton = document.querySelector("dialog + button");
var closeButton = document.querySelector("dialog button");
var submitNewBook = document.querySelector("#new-submit");
var formNewBook = document.querySelector("#new-book-form");
// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", function () {
    dialog.showModal();
});
// "Close" button closes the dialog
closeButton.addEventListener("click", function () {
    dialog.close();
});
var Book = /** @class */ (function () {
    function Book(title, author, pages_number) {
        this.title = title;
        this.author = author;
        this.pages_number = pages_number;
    }
    return Book;
}());
var library = [];
function addBookToLibrary(title, author, pages_number) {
    var added_book = new Book(title, author, pages_number);
    library.push(added_book);
}
function showLibrary() {
    for (var _i = 0, library_1 = library; _i < library_1.length; _i++) {
        var element = library_1[_i];
        console.log(element.title);
        var bookRow = document.createElement("p");
        bookRow.textContent = "".concat(element.title, " by ").concat(element.author, " long ").concat(element.pages_number);
        var libraryDiv = document.querySelector("#library-div");
        libraryDiv.appendChild(bookRow);
    }
    ;
}
formNewBook.addEventListener("submit", function (event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);
    addBookToLibrary(formData.get("title"), formData.get("author"), formData.get("pages_number"));
    showLibrary();
});
addBookToLibrary("Hobit", "Tolkien", 123);
addBookToLibrary("Harry potter", "Rowling", 321);
addBookToLibrary("Dance of Dragons", "GMR", 456);
addBookToLibrary("Witcher", "Sapkowski", 654);
addBookToLibrary("Narnie", "Lewis", 789);
showLibrary();
