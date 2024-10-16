import { useState, useEffect } from 'react'
import './App.css'
import List from './components/List/List.jsx';
import Search from './components/Search/Search.jsx';
import { show } from './services/swapi.js';

function App() {

    /* states */
    const [starships, setStarships] = useState([]);

    /* functions */
    const fetchDefaultData = async (starship) => {

        // fetch data
        const data = await show(starship);

        // sort data
        const sortedData = data.results.map(result => {
          
          return {
            name: result.name,
            class: result.starship_class,
            model: result.model,
            manufacturer: result.manufacturer,
          }

        });

        setStarships(sortedData);

    }


    /* effects */
    useEffect(() => { 

      // default starship
      let starship = '';

      // call the function
      fetchDefaultData(starship);

    }, [])

    return (
      <>
        <h1 id='root-title'>SWAPI Fetching Data Lab</h1>
        < List starships={starships} />
        < Search />
      </>
    )
}

export default App
