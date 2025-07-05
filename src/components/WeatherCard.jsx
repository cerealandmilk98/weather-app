const WeatherCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Feels Like: {data.main.feels_like}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;