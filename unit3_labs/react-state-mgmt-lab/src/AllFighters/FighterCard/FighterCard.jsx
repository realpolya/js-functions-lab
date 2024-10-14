import './FighterCard.css';

const FighterCard = (fighter) => {
    return (
        <ul className='fighter-card'>
            <li><span>Name:</span> {fighter.name}</li>
            <li><span>Price:</span> ${fighter.price}</li>
            <li><span>Strength:</span> {fighter.strength}</li>
            <li><span>Agility:</span> {fighter.agility}</li>
            <li><img src={fighter.img} /></li>
            <li>
                <button onClick={fighter.fighterAction}>Add {fighter.name}</button>
            </li>
        </ul>
    )
}

export default FighterCard