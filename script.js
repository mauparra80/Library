
const addBookBtn = document.querySelector("#submit");
addBookBtn.addEventListener('click', saveUserInfo);

let inputTitle = "book2";
let inputAuthor = "Author2";
let inputPages = 420;
let inputColor = "red";
let inputRead = "not read";

const myLibrary = [];

//have to replace this object
class Book {

    constructor(title,author,pages,color,read){
    this.title = title; //str
    this.author = author; //str
    this.pages = pages;//int
    this.color = color; //str
    this.read = read; //str or bool
    }
}

function openForm()
{
    document.querySelector(".form-container").style.display = "block";
    document.querySelector(".form-blur").style.display = "block";
}

//toggle read menu color
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

//color picker toggle effect.
const violet = document.querySelector("#violet");
const sienna = document.querySelector("#sienna");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");

violet.addEventListener('click', colorPicked);
sienna.addEventListener('click', colorPicked);
blue.addEventListener('click', colorPicked);
green.addEventListener('click', colorPicked);

function colorPicked(e){
    //remove all focus
    violet.classList.remove("selected");
    sienna.classList.remove("selected");
    blue.classList.remove("selected");
    green.classList.remove("selected");
    //add focus to target
    e.target.classList.add("selected");
    //set color
    inputColor = e.target.dataset.color;
}


//called when submit button is clicked
function saveUserInfo()
{
    inputTitle = document.getElementById("input-title").value;
    inputAuthor = document.getElementById("input-author").value;
    inputPages = document.getElementById("input-pages").value;
    inputRead = document.getElementById("input-read").value;

    if (inputCheck(inputTitle)) {
      closeForm();
      addCard();
      addBookToLibrary();
      updateClick();
    }
}

//create object with current inputs and append new book object to library
function addBookToLibrary()
{
    const book = new Book(inputTitle, inputAuthor, inputPages, inputColor, inputRead);
    myLibrary.push(book);
}

function closeForm()
{
    document.querySelector(".form-container").style.display = "none";
    document.querySelector(".form-blur").style.display = "none";
    document.querySelector("form").reset();
}


//updates all buttons on books when a new book is added
function updateClick(){
const readbtn = document.querySelectorAll(".book");


readbtn.forEach((book, index) => {
    book.querySelector("#read").addEventListener('click', () => {
        event.stopImmediatePropagation();
        changeReadBtn(book.dataset.index);
    })
})

const deletebtn = document.querySelectorAll(".book");
deletebtn.forEach((book, index) => {
    book.querySelector("#delete-book").addEventListener('click', () => {
        event.stopImmediatePropagation();
        deleteBook(book.dataset.index);
    })
})
}

//delete button is pressed
function deleteBook(index)
{
    //delete book, update object and array, update buttons
    document.querySelector("[data-index='"+index+"']").remove();

    myLibrary.splice(index, 1);

    updateIndex();
    updateClick();
}

function updateIndex()
{
    let i = 0;
    const books = document.
    querySelectorAll(".book");
    books.forEach((index) => {
        index.dataset.index = i;
        i++;
    });
}

//toggle read button is pressed
function changeReadBtn(index)
{
    const readBtn = document.querySelector("[data-index='"+index+"'] #read");

    if (readBtn.textContent == "Not Read")
    {
        readBtn.style.backgroundColor = "rgb(108, 177, 108)";
        readBtn.textContent = "Read";
        myLibrary[index].read = "Read";
    }
    else if (readBtn.textContent == "Read")
    {
        
        readBtn.style.backgroundColor = "rgb(255, 140, 140)";
        readBtn.textContent = "Not Read";
        myLibrary[index].read = "Not Read";
    }
    updateStats();
}

//creates dom card with user input and adds to tree
function addCard() {
    //get user input
    //create html content with user input
    let newBook = document.createElement("div");
    newBook.classList.add('book');
    newBook.dataset.index = myLibrary.length;
    newBook.innerHTML = '<img src="./img/brown-book.png" alt="book">';
    newBook.querySelector('img').classList.add(`filter-${inputColor}`);

    let bookInfo = document.createElement("div");
    bookInfo.innerHTML = '<button type="button" id="delete-book">X</button>';
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
    bookButtons.innerHTML = '<button type="button" id="edit"';
    bookButtons.innerHTML += '<button type="button" id="read"></button>';
    const readBtn = bookButtons.querySelector("#read");
    readBtn.textContent = inputRead;
    //set initial color of button. I guess I could save space by figuring out a function
    if (inputRead == "Read"){
        readBtn.style.backgroundColor = "rgb(108, 177, 108)";
    }
    else if (inputRead == "Not Read"){
        readBtn.style.backgroundColor = "rgb(255, 140, 140)";
    }
    
    let pages = document.createElement('h4');
    pages.classList.add('pages');
    pages.textContent = inputPages;

    bookBottom.appendChild(bookButtons);
    bookBottom.appendChild(pages);
    newBook.appendChild(bookBottom);

    //add bottomBorder for shelf style (work in progress)
    let botDiv = document.createElement('div');
    botDiv.classList.add("bottomBorder");
    newBook.appendChild(botDiv);

    
    
    //append all to books
    document.querySelector('.books').appendChild(newBook);

    const readbtn = document.querySelector(".books .book:last-child button:last-child");
    
    readbtn.textContent = inputRead;
    

}

//update stats
document.addEventListener('click', updateStats);

function updateStats(){
    let booksRead = 0;
    myLibrary.forEach((book) => {
        if (book.read == "Read"){booksRead++}
    });


    document.querySelector(".total-books").textContent = (myLibrary.length);
    document.querySelector(".books-read").textContent = booksRead;
    
}

function inputCheck(inputTitle) {
  if (inputTitle === ''){ 
    document.querySelector('#input-title').classList.add('invalid');
    return false};
  return true;
}

const inputTitleValue = document.querySelector('#input-title');
inputTitleValue.addEventListener('input', () => {
  console.log("input changed");
  if (inputTitleValue.value === '') { inputTitleValue.classList.add('invalid');}
  else {inputTitleValue.classList.remove('invalid');}
})

