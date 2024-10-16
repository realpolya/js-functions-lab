import Card from './Card/Card.jsx';
import './List.css';

function List({ starships }) {
  return (
    <div className='starships-list'>
        <h3 id='starships-list-head'> List of Starships</h3>
        <div id='starships-div'>
        {starships.map((starship, i) => {
          return < Card key={i} starship={starship} />
        })}
        </div>
    </div>
  )
}

export default List