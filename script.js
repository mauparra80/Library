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

const addBookBtn = document.querySelector("#submit");
addBookBtn.addEventListener('click', saveUserInfo);

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

function updateLibrary()
{
    
}

function openForm()
{
    document.querySelector(".form-container").style.display = "block";
    document.querySelector(".form-blur").style.display = "block";
}

function toggleReadMenu()
{
    const readButton = document.querySelector('#input-read');
    readButton.classList.toggle("toggle-read");
    if (readButton.value == "Not Read")
    {
        readButton.value = "Read";
    }
    else {readButton.value = "Not Read"};
}

//called when submit button is clicked
function saveUserInfo()
{
    inputTitle = document.getElementById("input-title").value;
    inputAuthor = document.getElementById("input-author").value;
    inputPages = document.getElementById("input-pages").value;
    inputRead = document.getElementById("input-read").value;

   

    closeForm();
    addCard();
    addBookToLibrary();
    updateClick();
}

//create object with current inputs and append new book object to library
function addBookToLibrary()
{
    const book = new Book(inputTitle, inputAuthor, inputPages, "red", inputRead);
    myLibrary.push(book);
    console.log(book);
    console.log(myLibrary);
}

function closeForm()
{
    document.querySelector(".form-container").style.display = "none";
    document.querySelector(".form-blur").style.display = "none";
    document.querySelector("form").reset();
}


//toggle read button when clicked
function updateClick(){
const readbtn = document.querySelectorAll(".book");
readbtn.forEach((book, index) => {
    book.querySelector("#read").addEventListener('click', () => {
        changeReadBtn(index);
    })
})
}

function changeReadBtn(index)
{
    console.log(index); //this works
    readBtn = document.querySelector("[data-index='"+index+"'] #read");

    if (readBtn.textContent == "Not Read")
    {
        readBtn.style.backgroundColor = "rgb(108, 177, 108)";
        readBtn.textContent = "Read";
        myLibrary[index].read = "Read";
        console.log(myLibrary[index]);
    }
    else if (readBtn.textContent == "Read")
    {
        
        readBtn.style.backgroundColor = "rgb(255, 140, 140)";
        readBtn.textContent = "Not Read";
        myLibrary[index].read = "Not Read";
        console.log(myLibrary[index]);
    }
}

//creates dom card with user input and adds to tree
function addCard() {
    //get user input
    

    //create html content with user input
    let newBook = document.createElement("div");
    newBook.classList.add('book');
    newBook.dataset.index = myLibrary.length;
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
    bookButtons.innerHTML = '<button type="button" id="edit" data-index="' + myLibrary.length + '" ></button>';
    bookButtons.innerHTML += '<button type="button" id="read">Read</button>';
    
    let pages = document.createElement('h4');
    pages.classList.add('pages');
    pages.textContent = inputPages;

    // console.log(document.querySelector(".books .book:last-child button:last-child").textContent);


    bookBottom.appendChild(bookButtons);
    bookBottom.appendChild(pages);
    newBook.appendChild(bookBottom);

    
    
    //append all to books
    document.querySelector('.books').appendChild(newBook);

    const readbtn = document.querySelector(".books .book:last-child button:last-child");
    
    readbtn.textContent = inputRead;
    

}




























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