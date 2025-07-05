import { useState } from "react";
import axios from "axios";

const SearchBar = ({ setWeatherData }) => {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (!city) return;

    try {
      const res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: city,
          units: "metric",
          appid: "4512d6e1f0f4c8cf085ba2e6878d9ab2",
        },
      });

      setWeatherData(res.data);
    } catch (error) {
      console.error("Failed to fetch weather:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
