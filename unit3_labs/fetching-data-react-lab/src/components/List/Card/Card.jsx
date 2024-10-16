import './Card.css';

function Card({ starship }) {
  return (
    <div className='starship-card'>
        <h2 className='starship-title'>{starship.name}</h2>
        <ul>
          <li><span>Class:</span> {starship.class}</li>
          <li><span>Model:</span> {starship.model}</li>
          <li><span>Manufacturer: </span>{starship.manufacturer}</li>
        </ul>
    </div>
  )
}

export default Card