import BookCard from "./bookcard"
// import {BookData} from "../Data"

const BookList=({books, onSelect, onDelete,onToggle})=>{

        const BooksData=books.map((book)=> 
        {
            return (
            <BookCard
            key={book.id} 
            {...book}
            onSelect={onSelect}
            onDelete={onDelete}
            onToggle={onToggle}
        />
            );
        });

        return(
            <>
            {BooksData}</>
        )
        
    
}
export default BookList