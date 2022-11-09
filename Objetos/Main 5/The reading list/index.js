import { Book } from "./clases.js";
import { BookList } from "./clases.js";

window.onload = function(){
    var myBookList = new BookList();

    document.querySelectorAll("button")[0].addEventListener("click", () =>{   
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let genre = document.getElementById("genre").value;
        myBookList.add(new Book(title, author, genre));

        pintarListaLibros(myBookList);
    });


    document.getElementById("readingList").addEventListener("click", () =>{     
        myBookList.finishCurrentBook();
        pintarListaLibros(myBookList);
    }); 
    
}


function pintarListaLibros(lista)
{
    document.getElementById("readingList").innerHTML = "";
    lista.libro.forEach( (libro) =>{
            let read;

            if (!libro.read)
                read="false";
            else
            {
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                read="Read on " + libro.readDate.toLocaleDateString('en-EN', options);
            }

           //Añadir libro en interfaz
           bookEntry = `<li class="list-group-item d-flex justify-content-between"><div>
           <h6 class="my-0"><b>${libro.title}</b></h6> <small class="text-muted" contenteditable="true">${libro.author}&nbsp;</small>
           </div> <span class="text-muted">${read}</span>
           </li>`;
           
              
           document.getElementById("readingList").innerHTML += bookEntry;
           
    })

    document.getElementById("booksRead").innerHTML = lista.numberBooksRead + " of "+ lista.totalBooks;
    
}