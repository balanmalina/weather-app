import styles from "./WeatherCard.module.css";

function WeatherCard({ temp, description, wind, country, city, icon }) {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className={styles.card}>
      <h2 className={styles.city}>
        {city}, {country}
      </h2>

      <div className={styles.temperature}>
        <img src={iconUrl} alt={description} />
        <span>{temp} °C</span>
      </div>

      <p className={styles.description}>{description}</p>
      <p className={styles.wind}>{wind} m/s</p>
    </div>
  );
}

export default WeatherCard;
