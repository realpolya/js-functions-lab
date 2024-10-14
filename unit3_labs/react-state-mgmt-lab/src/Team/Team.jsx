import './Team.css'
import TeamMember from './TeamMember/TeamMember.jsx';

const Team = (props) => {

    return (
        <>
            <div className='team-div'>
                <h3 className="message">{ props.anyoneThere ? 'Your team:' : 'Get some team members' }</h3>

                {props.team.map((fighter, i) => {
                    return < TeamMember key={i} {...fighter}
                    fighterAction={() => {props.removeFighter(fighter)}}/>
                })}
            </div>
        </>
    )

}

export default Team;