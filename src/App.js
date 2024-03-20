import "./Styles.css";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  let weatherData = {
    city: "Lagos",
    temperature: 31,
    date: "Wednesday 09:34 am",
    description: "few clouds",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
    humidity: 44,
    wind: 4.63,
  };
  return (
    <div className="App">
      <div class="weatherApp">
        <Header />
        <main>
          <div class="weather-app-data">
            <div>
              <h1 class="weather-app-city" id="city">
                {weatherData.city}
              </h1>
              <p class="weather-app-details">
                <span id="time">{weatherData.date}</span>,{" "}
                <span id="description">{weatherData.description}</span>
                <br />
                Humidity: <strong id="humidity">{weatherData.humidity}%</strong>
                , Wind:
                <strong id="wind-speed">{weatherData.wind}km/h</strong>
              </p>
            </div>
            <div class="weather-app-temperature-container">
              <div id="icon">
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                  alt="weatherimage"
                />
              </div>
              <div class="weather-app-temperature" id="temperature">
                {weatherData.temperature}
              </div>
              <div class="weather-app-unit">℃</div>
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
