import './Team.css'
import FighterCard from '../AllFighters/FighterCard/FighterCard.jsx';

const Team = (props) => {

    return (
        <>
            <div className='team-div'>
                <p>{ props.anyonerThere ? 'Your team:' : 'Get some team members' }</p>
            </div>
        </>
    )

}

export default Team;