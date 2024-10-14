import './WeatherIcon.css';

const WeatherIcon = (props) => {
    
    return (
        <>
            <img src={props.img} alt={props.imgAlt} />
        </>
    )

}

export default WeatherIcon;