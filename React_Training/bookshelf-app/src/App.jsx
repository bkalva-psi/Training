import { useState, useEffect, useRef } from 'react'

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import BookList from './components/BookList.jsx'
import SearchBar from './components/SearchBar.jsx'

import { BookData } from "./Data"

function App() {

  const [books, setBooks] = useState(() => {

    const storedBooks = localStorage.getItem('books')

    return storedBooks
      ? JSON.parse(storedBooks)
      : BookData

  })

  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState("all")

  const prevBooksRef = useRef(books)

  const bookcount = books.length

  const hasBooks = books.length > 0

  const filteredBooks = books.filter(book => {

    const matchesSearch =

      (book.title?.toLowerCase() || "")
        .includes(searchTerm.toLowerCase())

      ||

      (book.author?.toLowerCase() || "")
        .includes(searchTerm.toLowerCase())

    const matchesStatus =

      filterStatus === "all"

      ||

      (book.status?.toLowerCase() || "")
        === filterStatus

    return matchesSearch && matchesStatus

  })

  const hasFilteredBooks = filteredBooks.length > 0

  const hasSearchTerm =
    searchTerm.trim() !== ''

  useEffect(() => {

    document.title =
      `Bookshelf App - ${bookcount} books`

  }, [bookcount])

  useEffect(() => {

    localStorage.setItem(
      'books',
      JSON.stringify(books)
    )

  }, [books])

  useEffect(() => {

    const previousBooks =
      prevBooksRef.current

    if (books.length > previousBooks.length) {

      console.log(
        "Analytics: New book added"
      )

    }

    if (books.length < previousBooks.length) {

      console.log(
        "Analytics: Book deleted"
      )

    }

    books.forEach(book => {

      const oldBook =
        previousBooks.find(
          prevBook => prevBook.id === book.id
        )

      if (
        oldBook &&
        oldBook.status !== book.status
      ) {

        console.log(
          `Analytics: Status changed for "${book.title}"`
        )

      }

    })

    prevBooksRef.current = books

  }, [books])

  const handleSelectBook = (id) => {

    console.log('Selected:', id)

  }

  const handleDelete = (id) => {

    setBooks(prevBooks =>

      prevBooks.filter(
        book => book.id !== id
      )

    )

    console.log(
      'Deleted book with id:',
      id
    )

  }

  const handleToggle = (id) => {

    setBooks(prevBooks =>

      prevBooks.map(book => {

        if (book.id !== id) {
          return book
        }

        return {
          ...book,

          status:
            book.status === "completed"
              ? "reading"
              : "completed"
        }

      })

    )

    console.log(
      "Toggle status for:",
      id
    )

  }

  const handleSearch = (text) => {

    setSearchTerm(text)

    console.log(
      "Searched:",
      text
    )

  }

  const handleAddBook = () => {

    console.log(
      "Tried adding book"
    )

  }

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
      background:
        "linear-gradient(135deg, #4facfe, #00f2fe)",
      color: "#fff"
    }

  }

  return (

    <div>

      <Header
        onAddBook={handleAddBook}
        bookcount={bookcount}
      />

      <SearchBar
        onSearch={handleSearch}
      />

      <div style={styles.filterWrapper}>

        {
          ["all", "reading", "completed", "to-read"]
            .map(status => (

              <button
                key={status}

                onClick={() =>
                  setFilterStatus(status)
                }

                style={{
                  ...styles.filterButton,

                  ...(filterStatus === status
                    ? styles.activeButton
                    : {})
                }}
              >
                {status}
              </button>

            ))
        }

      </div>

      <p>
        Showing {filteredBooks.length}
        {" "}of{" "}
        {books.length} books
      </p>

      {
        !hasBooks ? (

          <p>
            You have no books in your shelf!
          </p>

        ) : !hasFilteredBooks ? (

          hasSearchTerm ? (

            <p>
              No books found for "
              {searchTerm}
              "
            </p>

          ) : (

            <p>
              No books match the current filter.
            </p>

          )

        ) : (

          <BookList
            books={filteredBooks}
            onSelect={handleSelectBook}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />

        )
      }

      <Footer />

    </div>

  )
}

export default App
