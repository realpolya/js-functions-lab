import './Team.css'
import TeamMember from './TeamMember/TeamMember.jsx';

const Team = (props) => {

    return (
        <>
            <div className='team-div'>
                
                <h3 className="message">{ props.anyoneThere ? 'Your team:' : 'Get some team members' }</h3>

                <div className="team-stats">
                    <p><span>Total strength: </span>
                        {props.team.reduce((arg, member) => {return arg + member.strength}, 0)}
                    </p>
                    <p><span>Total agility: </span>
                        {props.team.reduce((arg, member) => {return arg + member.agility}, 0)}
                    </p>
                </div>

                <div className='team-cards'>
                    {props.team.map((fighter, i) => {
                        return < TeamMember key={i} {...fighter}
                        fighterAction={() => {props.removeFighter(fighter)}}/>
                    })}
                </div>

            </div>
        </>
    )

}

export default Team;