import { useState } from 'react';
import './Bookshelf.css';
import AddBook from './AddBook/AddBook.jsx';
import Library from './Library/Library.jsx';

const Bookshelf = () => {
    
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });  

    // functions TODO:
    const addBookFn = e => {
    
        // check balance
        const balanceEnough = money > fighter.price ? true : false;
        
        // check for balance
        if (!balanceEnough) {
          return console.log('Not enough money');
        } 
        
        // add a fighter
        console.log('fighter is ', fighter)
        setTeam([...team, fighter]);
    
        // subtract from balance
        setMoney(money - fighter.price);
    
      }

    const handleAddBook = () => {

    }

    return (
        
        <div className="bookshelf-div">
            < AddBook />
            < Library />
        </div>
        
    )

}

export default Bookshelf;