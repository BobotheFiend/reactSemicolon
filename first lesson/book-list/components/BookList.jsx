import { useEffect, useState } from "react"
import styles from "./booklist.module.css"
import { mockBookList } from "./mockBookList.js"


const BookList = ()=> {

    const [books, setBooks] = useState([]);
    const [newBooks, setNewBooks] = useState("");

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
        event.predefault
    }


    return(

  	<div className={styles.wrapper}>
	    <header>
	    	<div className={styles.pageBanner}>
	    		<h1 className={styles.title}> Book Collections</h1>
          <p>Books</p>
          <form className={styles.searchBooks}>
            <input type="text" placeholder="Search books..." />
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
	    			        <span onClick={()=> deleteBook_function(id)} className={styles.delete}>delete</span>
	    		        </li>
                    ))
   
                }
	    	</ul>
	    </div>
	    <form onSubmit={addBook_function} className={styles.addBook}>
	    	<input type="text" onChange={(inputs)=> setNewBooks(inputs.target.value)} placeholder="Add a book..." />
	    	<button type="submit">Add</button>
	    </form>

    </div>

    )
}

export default BookList;