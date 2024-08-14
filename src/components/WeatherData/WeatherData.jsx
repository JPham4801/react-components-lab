import WeatherIcon from "../WeatherIcon/WeatherIcon";

const WeatherData = ({ day, conditions, time, img, imgAlt }) => {
  return (
    <>
      <h2>{day}</h2>
      <WeatherIcon img={img} imgAlt={imgAlt} />
      <p>conditions: {conditions}</p>
      <p>time: {time}</p>
    </>
  );
};

export default WeatherData;
