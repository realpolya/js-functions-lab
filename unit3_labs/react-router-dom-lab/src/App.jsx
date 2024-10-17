import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// components
import NavBar from './components/NavBar.jsx';
import Form from './components/Form.jsx';
import List from './components/List.jsx';
import Item from './components/Item.jsx';

// css
import './App.css'

class Mailbox {

  constructor(boxholder, boxSize, array) {
      
      this._id = this.incrementId(array);
      this.boxholder = boxholder;
      this.boxSize  = boxSize;

  }

  incrementId(array) {

      return array.length + 1;

  }

}

const example = [];

const mailbox1 = new Mailbox('Liza', 'small', example);
example.push(mailbox1);
const mailbox2 = new Mailbox('Dima', 'large', example);
example.push(mailbox2);

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
        <Route path='/' element={<main>Home Page</main>} />

        <Route path='/list' element={< List mailboxes={mailboxes}/>} />

        <Route path='/new' element={< Form addMailbox={addMailbox} />} />

      </Routes>
    </>
  )
}

export default App
