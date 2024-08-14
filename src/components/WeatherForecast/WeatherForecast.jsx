import WeatherData from '../WeatherData/WeatherData';
import './WeatherForecast.css';

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather">
      <WeatherData
        day={forecast.day}
        conditions={forecast.conditions}
        time={forecast.time}
        img={forecast.img}
        imgAlt={forecast.imgAlt}
      />
    </div>
  );
};

export default WeatherForecast;
