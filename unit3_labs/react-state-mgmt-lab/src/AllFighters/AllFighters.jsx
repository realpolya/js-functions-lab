import './AllFighters.css';
import FighterCard from './FighterCard/FighterCard.jsx';


const AllFighters = (props) => {

    console.log('At allFighters', props.fighters);

    return (
        <>
            <div className='fighter-cards'>
                
                {console.log(props.fighters)}
                {props.fighters.map((fighter, i) => {
                
                return < FighterCard 
                    key={i} {...fighter} 
                    fighterAction={() => {props.addFighter(fighter)}}
                />

                })}

            </div>
        </>
    )
    
}

export default AllFighters;