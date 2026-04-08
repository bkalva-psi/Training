import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import BookList from './components/BookList.jsx' 
import SearchBar from './components/SearchBar.jsx'
import {BookData} from "./Data"

function App() {
  
  const[books,setBooks]=useState(BookData)
  const [searchTerm,setSearchTerm]=useState('')
  const [bookCount,setbookCount]=useState()
  

  const handleSelectBook=(id)=>{console.log('Selected: ', id)};
  const handleDelete=(id)=>
  {
    setBooks(prevBooks=>{
      const updatedBooks=prevBooks.filter(book=>book.id!==id);
      setbookCount(updatedBooks.length);
      console.log(bookCount);
      console.log("Deleted Book with id",id); 
    }
    );
    
    
  }
  const handleToggle=(id)=>
  {

    setBooks(prevBooks=>
      prevBooks.map(i=>i.id===id?{...i,status:"Completed"}:i)
    )
    console.log("Toggle status for:", id);
  }
  const handleSearch=(text)=>{
    setSearchTerm(text)  
    console.log("Searched: ",text);
  }
  const handleAddBook=()=>
  {
    console.log("Tried adding book");
  }

  const filteredBooks = books.filter(book =>
  book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  book.author.toLowerCase().includes(searchTerm.toLowerCase())
);
  return(
  <div>
    <Header onAddBook={handleAddBook}/>  
    <SearchBar onSearch={handleSearch}/>  
    <BookList books={filteredBooks}
    onSelect={handleSelectBook}
    onDelete={handleDelete}
    onToggle={handleToggle}
    />
    <Footer/>
  </div>
)
}


export default App
