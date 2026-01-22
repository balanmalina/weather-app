import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import LocationSelector from "./components/LocationSelector";
import RightCard from "./components/RightCard";
import "./App.css";

function App() {
  const [location, setLocation] = useState("Biarritz");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

    // Current weather
    fetch(weatherUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod !== 200) {
          setWeatherData(null);
          return;
        }
        setWeatherData(data);
      });

    // Forecast
    fetch(forecastUrl)
      .then((res) => res.json())
      .then((data) => {
        setForecastData(data);
      });

  }, [location]);

  // ---- data pregătită pentru componente ----
  const stats = weatherData && {
    humidity: weatherData.main.humidity,
    pressure: weatherData.main.pressure,
    visibility: weatherData.visibility,
  };

  const forecast =
    forecastData?.list?.slice(0, 4).map((item) => ({
      temp: item.main.temp,
      icon: item.weather[0].icon,
      date: item.dt_txt,
    })) || [];

  return (
    <div className="app">
      <div className="layout">

        {/* LEFT CARD */}
        <div className="left">
          {weatherData && (
            <WeatherCard
              temp={weatherData.main.temp}
              description={weatherData.weather[0].description}
              wind={weatherData.wind.speed}
              city={weatherData.name}
              country={weatherData.sys.country}
              icon={weatherData.weather[0].icon}
            />
          )}
        </div>

        {/* RIGHT CARD */}
        <div className="right">
          <LocationSelector
            location={location}
            setLocation={setLocation}
          />

          {!weatherData && <p>City not found</p>}

          {weatherData && (
            <RightCard
              stats={stats}
              forecast={forecast}
            />
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
