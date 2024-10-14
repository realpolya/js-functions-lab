import { useState } from 'react'
import './App.css'
import Bookshelf from './Bookshelf/Bookshelf.jsx';

function App() {
  
  return (
    <>

      <div className='main-page'>
        <h1>My Bookshelf</h1>
        < Bookshelf />
      </div>
      
    </>
  )

}

export default App
