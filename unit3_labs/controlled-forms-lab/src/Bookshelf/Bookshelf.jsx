import './Bookshelf.css'
import AddBook from './AddBook/AddBook.jsx';
import Library from './Library/Library.jsx';

const Bookshelf = (props) => {
    
    return (
        
        <div className="bookshelf-div">
            <h1>Bookshelf here</h1>
            < AddBook />
            < Library />
        </div>
        
    )
    
}

export default Bookshelf;