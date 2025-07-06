import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <SearchBar setWeatherData={setWeatherData} />
      <WeatherCard data={weatherData} />
    </div>
  );
}

export default App;
