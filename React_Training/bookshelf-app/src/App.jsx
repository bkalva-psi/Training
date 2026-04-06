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

function App() {
  const [count, setCount] = useState(0)
  const handleSelectBook=(id)=>{console.log('Selected: ', id)};


  return(
  <div>
    <Header/>  
    <SearchBar/>  
    <BookList onSelect={handleSelectBook}/>
    <Footer/>
  </div>
)
}


export default App
