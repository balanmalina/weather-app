import styles from "./RightCard.module.css";
import ForecastItem from "./ForecastItem";

function RightCard({ stats, forecast }) {
  return (
    <section className={styles.card}>
      
      <section className={styles.details}>
        <h2 className={styles.title}>Weather details</h2>
        <p>Humidity: {stats.humidity}%</p>
        <p>Pressure: {stats.pressure} hPa</p>
        <p>Visibility: {stats.visibility / 1000} km</p>
      </section>

      <section className={styles.forecast}>
        <h2 className={styles.title}>Forecast</h2>

        <div className={styles.forecastList}>
          {forecast.map((day, index) => (
            <ForecastItem
              key={index}
              temp={day.temp}
              icon={day.icon}
              date={day.date}
            />
          ))}
        </div>
      </section>

    </section>
  );
}

export default RightCard;

