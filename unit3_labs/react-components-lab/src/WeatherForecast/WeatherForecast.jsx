import WeatherIcon from './WeatherIcon/WeatherIcon.jsx';
import WeatherData from './WeatherData/WeatherData.jsx';
import './WeatherForecast.css'

const WeatherForecast = (props) => {

    return (
        <>
            <section className = 'forecast-card'>
                < WeatherIcon {...props}/>
                < WeatherData {...props}/>
            </section>
        </>
    )
}

export default WeatherForecast;