import ForecastItem from "./ForecastItem";

function RightCard({ stats, forecast }) {
  return (
    <section>
      <section>
        <h2>Weather details</h2>
        <p>Humidity: {stats.humidity}%</p>
        <p>Pressure: {stats.pressure} hPa</p>
        <p>Visibility: {stats.visibility / 1000} km</p>
      </section>

      <section>
        <h2>Forecast</h2>

        <div>
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