import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("Ghanauli,Punjab");

  const [locationDetails, setLocationDetails] = useState({
    Key: "",
    Name: "",
    State: "",
    CountryId: "",
    Country: "",
  });
  const [weatherDetails, setWeatherDetails] = useState({
    Icon: "",
    Type: "",
    Temperature: "",
    realFeel: "",
    humidity: "",
    visibility: "",
    windspeed: "",
    windpressure: "",
  });

  const apiKey = import.meta.env.VITE_API_KEY;
  function fetchData() {
    const locationUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`;
  
    fetch(locationUrl)
      .then((response) => response.json())
      .then((data) => {
        setLocationDetails({
          Key: data[0].Key,
          Name: data[0].LocalizedName,
          State: data[0].AdministrativeArea.LocalizedName,
          CountryId: data[0].Country.ID,
          Country: data[0].Country.LocalizedName,
        });
        console.log(data[0].Key); // Log the Key here to ensure it's fetched correctly
  
        const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${data[0].Key}?apikey=${apiKey}&details=true`;
  
        return fetch(weatherUrl);
      })
      .then((response) => response.json())
      .then((weatherData) => {
        
        setWeatherDetails({
          Icon: weatherData[0].WeatherIcon,
          Type: weatherData[0].WeatherText,
          Temperature: weatherData[0].Temperature.Metric.Value,
          realFeel: weatherData[0].RealFeelTemperature.Metric.Value,
          humidity: weatherData[0].RelativeHumidity,
          visibility: weatherData[0].Visibility.Metric.Value,
          windspeed: weatherData[0].Wind.Speed.Metric.Value,
          windpressure: weatherData[0].Pressure.Imperial.Value,
        });
         console.log(weatherDetails.Icon);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
useEffect(()=>{
locationDetails,
weatherDetails,
fetchData();
}, [])
  return (
    <main className="main-wrapper center">
      <div className="container center flex-col">
        <div className="search">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="search-bar"
                placeholder="Search for a city"
                name="cityName"
              />
              <button type="submit" className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>

        <div className="weather-details center flex-col">
          <div className="city-weather-details">
            <div className="city">
              <h1 className=" text-2xl font-bold p-2 my-2">
                {locationDetails.Name}, {locationDetails.State},
                {locationDetails.CountryId}
              </h1>
            </div>
            <div className="weather-type">
              <h3 className="text-2xl font-bold p-2">{weatherDetails.Type}</h3>
            </div>
            <div className="weather-temperature flex align-items-center">
              <img src={weatherDetails.Icon} alt={weatherDetails.Type} />
              <p className="text-4xl">
                {weatherDetails.Temperature}<span>&deg;</span>
                <span>C</span>
              </p>
            </div>
            <div className="real-feel m-2 flex align-items-center">
              <h6 className="font-bold">Real Feel</h6>
              <p className="px-2">
                {weatherDetails.realFeel}<span>&deg;</span>
              </p>
            </div>
          </div>
          <div className="details-row">
            <div className="details-cols">
              <i className="fa-solid fa-droplet"></i>
              <div className="col-details">
                <p>Humidity</p>
                <p>{weatherDetails.humidity}%</p>
              </div>
            </div>
            <div className="details-cols">
              <i className="fa-solid fa-smog"></i>
              <div className="col-details">
                <p>Visibilty</p>
                <p>{weatherDetails.visibility}km</p>
              </div>
            </div>
            <div className="details-cols">
              <i className="fa-solid fa-wind"></i>
              <div className="col-details">
                <p>Wind Speed</p>
                <p>{weatherDetails.windspeed}km/h</p>
              </div>
            </div>
            <div className="details-cols">
              <i className="fa-solid fa-gauge-high"></i>
              <div className="col-details">
                <p>Wind Pressure</p>
                <p>{weatherDetails.windpressure}inHg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
