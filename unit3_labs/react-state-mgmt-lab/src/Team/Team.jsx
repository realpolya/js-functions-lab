import './Team.css'
import TeamMember from './TeamMember/TeamMember.jsx';

const Team = (props) => {

    return (
        <>
            <div className='team-div'>
                <p className="message">{ props.anyoneThere ? 'Your team:' : 'Get some team members' }</p>

                {props.team.map((fighter, i) => {
                    return < TeamMember key={i} {...fighter}/>
                })}
            </div>
        </>
    )

}

export default Team;