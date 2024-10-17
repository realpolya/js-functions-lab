import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// components
import Home from './components/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Form from './components/Form.jsx';
import List from './components/List.jsx';
import Item from './components/Item.jsx';

// css
import './App.css'

// import data
import {sizes, Mailbox, example} from './data/data.js';


function App() {

  console.log(example);
  const [mailboxes, setMailboxes] = useState(example);


  const addMailbox = data => {

    // create new instance of Mailbox
    const newMailbox = new Mailbox(data.boxholder, data.boxSize, mailboxes);

    // update state
    return setMailboxes([...mailboxes, newMailbox]);

  }


  return (
    <>
      <h1>React Router DOM Lab</h1>

      < NavBar />
      
      <Routes>

        <Route path='/' element={< Home />} />

        <Route path='/list' element={< List mailboxes={mailboxes}/>} />

        <Route path='/new' element={< Form addMailbox={addMailbox} sizes={sizes} />} />

        <Route path='/item/:id' element={< Item mailboxes={mailboxes} />} />

      </Routes>
    </>
  )
}

export default App
