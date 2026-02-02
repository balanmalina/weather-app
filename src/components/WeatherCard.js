import { useState } from "react";
import LocationSelector from "./LocationSelector";
import styles from "./WeatherCard.module.css";

function WeatherCard({
  temp,
  description,
  wind,
  country,
  city,
  icon,
  location,
  setLocation,
}) {
  const [showInput, setShowInput] = useState(false);
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  
  return (
    <div className={styles.card}>
      <div>
        <h2 className={styles.city}>
          {city}, {country}
        </h2>

        <button
          className={styles.changeBtn}
          onClick={() => setShowInput((prev) => !prev)}
        >
          Change location
        </button>
      </div>

      {showInput && (
        <div className={styles.locationWrapper}>
          <LocationSelector
            location={location}
            setLocation={(value) => {
              setLocation(value);
              setShowInput(false);
            }}
          />
        </div>
      )}

      <div className={styles.temperature}>
        <img src={iconUrl} alt={description} />
        <span>{Math.round(temp)}°C</span>
      </div>

      <p className={styles.description}>{description}</p>
      <p className={styles.wind}>{wind} m/s</p>
    </div>
  );
}

export default WeatherCard;

