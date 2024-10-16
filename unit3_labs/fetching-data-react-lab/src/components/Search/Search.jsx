import './Search.css';
import { useState } from 'react'

function Search({ fetchData }) {

  /* states */
  const [starship, setStarship] = useState('');
  
  const handleSubmit = e => {
    // prevent reloads
    e.preventDefault();

    console.log(starship);

    // send the API call
    fetchData(starship);

    // reset city
    setStarship('');

  };

  const handleType = e => setStarship(e.target.value);
  
  return (
    <section className="swapi-search">

          <form onSubmit={handleSubmit}>
              <label htmlFor="starship">Enter a starship:</label>
              <input
                  id="starship"
                  type="text"
                  value={starship}
                  onChange={handleType}
                  autoFocus
              />
              <button type="submit">Search SWAPI</button>
          </form>

      </section>
  )
}

export default Search