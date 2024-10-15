import { useState } from 'react';
import './Bookshelf.css';
import AddBookForm from './AddBookForm/AddBookForm.jsx';
import Library from './Library/Library.jsx';

const Bookshelf = () => {
    
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });  

    const handleNewBook = e => setNewBook({...newBook, [e.target.name]: e.target.value });
    const addBook = (newBook) => setBooks([...books, newBook]);

    const handleSubmit = e => {

        // prevent navigation away from the page
        e.preventDefault();
        console.log("handling submit");
    
        // update library collection
        addBook(newBook);
    
        // clear formData
        setNewBook({title:'', author:''});
    
    }

    return (
        
        <div className="bookshelf-div">
            
            < AddBookForm
                newBook={newBook}
                handleSubmit={handleSubmit}
                handleNewBook={handleNewBook} />
            
            < Library books={books}/>
        </div>
        
    )

}

export default Bookshelf;