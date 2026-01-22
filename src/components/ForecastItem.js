function ForecastItem({ temp, icon, date }) {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <article>
      <p>{date}</p>
      <img src={iconUrl} alt="weather icon" />
      <p>{Math.round(temp)}°C</p>
    </article>
  );
}

export default ForecastItem;