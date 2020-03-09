import React, {useEffect, useState} from 'react';
import Book from './Book'
import './App.css' 

const App = () => {
  const APP_KEY = "AIzaSyAr56gpnbgXPQZ7UnT5QNz-iC3CnlY1OA0";

   const [books, setBooks] = useState([]);
   const [search, setSearch] = useState("");
   const [query, setQuery] = useState('flowers')

   useEffect ( () => {
    getBooks();
   }, [query]);

   const getBooks = async () => {
     const response = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${APP_KEY}`)
      const data = await response.json()
      setBooks(data.items)
      console.log(data.items)
    };

    const updateSearch = e => {
      setSearch(e.target.value)
    }
    
    const getSearch = e => {
      e.preventDefault();
      setQuery(search)
      setSearch("")
    }
    
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form" >
        <input className="search-bar"type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit"> Search</button>
      </form>

        <div className="books">
        {books.map(book => (
         <Book
          key={book.id}
          image={book.volumeInfo.imageLinks.thumbnail}
          author={book.volumeInfo.authors}
          title={book.volumeInfo.title}
          description={book.volumeInfo.description}
          categories={book.volumeInfo.categories}
         />
         ))}
        </div>
      
     
    </div>
  )
}

export default App;