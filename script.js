// function Book(title, author, pages, read) {
//     this.title = title
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function() {
//         return(title + " by " + author + ", " + pages + " pages, " + read + " read")
//     }
// }

// Book.prototype.printAuthor = function(){
//     console.log(this.author);
// }

// const NorseMyth = new Book("Norse Mythology", "Neil Geiman", 230, "already");
// console.log(NorseMyth.info());
// Book.printAuthor();


// we need to open up box so the user can enter
// title, author, pages
//choose color, toggle read/not read

let inputTitle = "book2";
let inputAuthor = "Author2";
let inputPages = 420;
let inputColor = "red";
let inputRead = "not read";

const myLibrary = [];

function Book(title,author,pages,color,read) {
    //the constructor
    this.title = title; //str
    this.author = author; //str
    this.pages = pages;//int
    this.color = color; //str
    this.read = read; //str or bool
}

//creates dom card with user input and adds to tree
function addBookToLibrary() {
    //get user input
    
    //create html content with user input
    let newBook = document.createElement("div");
    newBook.classList.add('book');
    newBook.innerHTML = '<img src="./img/brown-book.png" alt="book">';

    let bookInfo = document.createElement("div");
    let titleContent = document.createElement('h4');
    let authorContent = document.createElement('h4');
    bookInfo.classList.add('book-info');
    titleContent.classList.add('title');
    authorContent.classList.add('author');
    titleContent.textContent = inputTitle;
    authorContent.textContent = inputAuthor;
    bookInfo.appendChild(titleContent);
    bookInfo.appendChild(authorContent);
    newBook.appendChild(bookInfo);
    

    //add book-bottom
    let bookBottom = document.createElement("div");
    bookBottom.classList.add('book-bottom');
    
    let bookButtons = document.createElement("div");
    bookButtons.classList.add('book-buttons');
    bookButtons.innerHTML = '<button type="button" id="edit">Edit</button>';
    bookButtons.innerHTML += '<button type="button" id="read">Read</button>';
    let pages = document.createElement('h4');
    pages.classList.add('pages');
    pages.textContent = inputPages;

    bookBottom.appendChild(bookButtons);
    bookBottom.appendChild(pages);
    newBook.appendChild(bookBottom);
    
    //append all to books
    document.querySelector('.books').appendChild(newBook);
}

let newBook = document.getElementById('newBook');
newBook.addEventListener('click', () => {
    console.log("button clicked");
    addBookToLibrary();
});

const norseMyth = new Book("Norse Mythology", "Neil Gaiman", 304, "blue", "read");

console.log(norseMyth);
























// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayName = function() {
//     console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
// }

// Player.prototype.getMarker = function() {
//     console.log(`My marker is '${this.marker}'`);
// };

// console.log(Object.getPrototypeOf(Player.prototype));

// Object.setPrototypeOf(Player.prototype, Person.prototype);
// console.log(Object.getPrototypeOf(Player.prototype));

// const player1 = new Player("steve", "X");
// const player2 = new Player("also steve", "O");

// player1.sayName();
// player2.sayName();

// player1.getMarker();
// player2.getMarker();