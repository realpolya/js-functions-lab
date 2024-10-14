import './WeatherData.css';

const WeatherData = (props) => {
    return (
        <>
            <h2>{props.day}</h2>
            <p><span>conditions: </span>{props.conditions}</p>
            <p><span>time: </span>{props.time}</p>
        </>
    )
}

export default WeatherData;