import styles from "./ForecastItem.module.css";

function ForecastItem({ temp, icon, date }) {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <article className={styles.item}>
      <p className={styles.date}>{date}</p>
      <img src={iconUrl} alt="" />
      <p className={styles.temp}>{Math.round(temp)}°</p>
    </article>
  );
}

export default ForecastItem;

