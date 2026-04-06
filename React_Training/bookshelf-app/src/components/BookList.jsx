import BookCard from "./bookcard"
import {BookData} from "../Data"

const BookList=(handleSelectBook)=>{

        const BooksData=BookData.map((book)=> 
        {
            return (
            <BookCard {...book}
            onSelect={handleSelectBook}
        />
            );
        });

        return(
            <>
            {BooksData}</>
        )
        
    
}
export default BookList