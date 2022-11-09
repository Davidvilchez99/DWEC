import { Book } from "./book.js";
import { BookList } from "./bookList.js";

window.onload = () =>{
    let list = new BookList();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const addBookBTN = document.getElementsByClassName("btn btn-primary btn-lg btn-block")[0];
    const divBookList = document.getElementsByClassName("col-md-12")[0];
    addBookBTN.addEventListener('click', ()=>{
        let book = new Book(title, author, genre);
        list.addBook(book);
        const ulListBook = document.getElementById("readingList");
        const li = document.createElement("li");
        ulListBook.appendChild(li);
        // li.style.width = "200px";
        // li.style.heigth = "40px";
    })
}
