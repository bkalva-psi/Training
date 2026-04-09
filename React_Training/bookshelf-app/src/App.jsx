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
  const [filterStatus,setFilterStatus]=useState("all")
  const bookcount=books.length
  
books.forEach(book => {
  console.log("STATUS:", book.status);
});
  const handleSelectBook=(id)=>{console.log('Selected: ', id)};
  const handleDelete=(id)=>
  {
    setBooks(prevBooks=>prevBooks.filter(book=>book.id!==id)
  );
  console.log('Deleted the book with id',id)
  console.log('The no of books',bookcount);   
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

  const filteredBooks = books.filter(book => {
  const matchesSearch =
    (book.title?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
    (book.author?.toLowerCase() || "").includes(searchTerm.toLowerCase());

  const matchesStatus =
    filterStatus === "all" ||
    (book.status?.toLowerCase() || "") === filterStatus;

  return matchesSearch && matchesStatus;
});

console.log("Filtered Books:", filteredBooks);
const styles = {
  filterWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap"
  },

  filterButton: {
    padding: "8px 14px",
    borderRadius: "999px",
    border: "none",
    background: "#e0e0e0",
    cursor: "pointer",
    fontSize: "13px"
  },

  activeButton: {
    background: "linear-gradient(135deg, #4facfe, #00f2fe)",
    color: "#fff"
  }
};
  return(
  <div>
    <Header onAddBook={handleAddBook} bookcount={bookcount}/>  
    <SearchBar onSearch={handleSearch}/> 
<div style={styles.filterWrapper}>
  {["all", "reading", "completed", "to-read"].map((status) => (
    <button
      key={status}
      onClick={() => setFilterStatus(status)}
      style={{
        ...styles.filterButton,
        ...(filterStatus === status ? styles.activeButton : {})
      }}
    >
      {status}
    </button>
  ))}
</div>
     
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
