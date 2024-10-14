import '../../AllFighters/FighterCard/FighterCard.css';
import './TeamMember.css';

const TeamMember = (fighter) => {
    return (
        <ul className='fighter-card team-card'>
            <li><span>Name:</span> {fighter.name}</li>
            <li><span>Price:</span> ${fighter.price}</li>
            <li><span>Strength:</span> {fighter.strength}</li>
            <li><span>Agility:</span> {fighter.agility}</li>
            <li><img src={fighter.img} /></li>
            <li>
                <button onClick={fighter.fighterAction}>Remove {fighter.name}</button>
            </li>
        </ul>
    )
}

export default TeamMember