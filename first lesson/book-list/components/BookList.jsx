import { useEffect, useState } from "react"
import styles from "./booklist.module.css"
import { mockBookList } from "./mockBookList.js"


const BookList = ()=> {

    const [books, setBooks] = useState([]);
    const [newBooks, setNewBooks] = useState("");
    const [search, setSearch] = useState("");
    console.log(search)

    useEffect(()=> {
        const fetchBooks = async () =>{
            try{
                const data = await mockBookList();
                setBooks(data);
                console.log(data);
            }catch (e){
                console.log(e);
            }
        }
        fetchBooks();
    }, [])


    const deleteBook_function = (id)=>{
        let filteredBook = books.filter((book)=>(book.id !== id));
        setBooks(filteredBook)
    }

    // console.log(newBooks)
    
    function addBook_function(event){
        event.preventDefault();

        if(!newBooks.trim()){ alert("Input a name for you to add a book!!");
            return;}
        setBooks((previous)=>[...previous, {id: books.length + 1, title: newBooks}]);
        setNewBooks("");
    }


    function search_function(event){
        event.preventDefault();

    }

    const displayFoundBook = ()=>{
        let filteredBook = []
        books.forEach((book) =>{
            let bookToLower = book.title.toLowerCase();
            if(bookToLower.includes(search))
                filteredBook.push(
                    <div key={book.id}>{book.title}</div>
            );
        })
        return filteredBook;
    }

    return(

  	<div className={styles.wrapper}>
	    <header>
	    	<div className={styles.pageBanner}>
	    		<h1 className={styles.title}> Book Collections</h1>
          <p>Books</p>
          <form onSubmit={search_function} className={styles.searchBooks}>
            <input type="text" onChange={(event)=> setSearch(event.target.value.toLowerCase())} placeholder="Search books..." />
          </form>
	    	</div>
	    </header>
	    <div className={styles.bookList}>
	    	<h2 className={styles.title}>Books to Read</h2>
	    	<ul>


                {
                    books.map(({id, title})=>(
	    		        <li key={id}>
	    			        <span className={styles.name}>{title}</span>
	    			        <span onInput={()=> deleteBook_function(id)} className={styles.delete}>delete</span>

	    		        </li>
                    ))
   
                }

	    	</ul>


	    </div>
	    <form onSubmit={addBook_function} className={styles.addBook}>
	    	<input type="text" value={newBooks} onChange={(inputs)=> setNewBooks(inputs.target.value)} placeholder="Add a book..." />
	    	<button type="submit">Add</button>
	    </form>

    </div>

    )
}

export default BookList;