import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  // State to manage the user input for city search
  const [city, setCity] = useState("");

  // State to store location details fetched from the API
  const [locationDetails, setLocationDetails] = useState({
    Key: "",
    Name: "",
    State: "",
    CountryId: "",
    Country: "",
  });

  // State to store weather details fetched from the API
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

  // API key fetched from environment variables
  const apiKey = import.meta.env.VITE_API_KEY;

  // Function to fetch data for the given city
  function fetchData(city) {
    const locationUrl = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${
      city || "Rupnagar,Punjab"
    }`;

    fetch(locationUrl)
      .then((response) => response.json())
      .then((data) => {
        // Update the location details state with the fetched data
        setLocationDetails({
          Key: data[0].Key,
          Name: data[0].LocalizedName,
          State: data[0].AdministrativeArea.LocalizedName,
          CountryId: data[0].Country.ID,
          Country: data[0].Country.LocalizedName,
        });

        console.log(data[0].Key); // Log the Key here to ensure it's fetched correctly

        const weatherUrl = `https://dataservice.accuweather.com/currentconditions/v1/${data[0].Key}?apikey=${apiKey}&details=true`;

        return fetch(weatherUrl);
      })
      .then((response) => response.json())
      .then((weatherData) => {
        // Update the weather details state with the fetched data
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

        console.log(weatherData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city);
    setCity("");
  };

  // Function to handle input change for city search
  const handleChange = (event) => {
    const { value } = event.target;
    setCity(value);
  };
  //UseEffect for calling function on load
  useEffect(() => {
    fetchData(city);
  }, []);

  return (
    <main className="main-wrapper center">
      <div className="container center flex-col">
        {/* City search form */}
        <div className="search">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="search-bar"
                placeholder="Search for a city"
                name="cityName"
                value={city}
                onChange={handleChange}
              />
              <button type="submit" className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>

        {/* Weather details section */}
        <div className="weather-details center flex-col">
          {/* City name, weather type, and temperature */}
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
              {/* Weather icon */}
              <img
                src={`./images/weather-icons/${weatherDetails.Icon}.png`}
                alt={weatherDetails.Type}
                className="weather-icon"
              />
              <p className="text-4xl">
                {weatherDetails.Temperature}
                <span>&deg;</span>
                <span>C</span>
              </p>
            </div>
            <div className="real-feel m-2 flex align-items-center">
              <h6 className="font-bold">Real Feel</h6>
              <p className="px-2">
                {weatherDetails.realFeel}
                <span>&deg;C</span>
              </p>
            </div>
          </div>

          {/* Weather details row */}
          <div className="details-row">
            {/* Humidity */}
            <div className="details-cols">
              <i className="fa-solid fa-droplet"></i>
              <div className="col-details">
                <p>Humidity</p>
                <p>{weatherDetails.humidity}%</p>
              </div>
            </div>
            {/* Visibility */}
            <div className="details-cols">
              <i className="fa-solid fa-smog"></i>
              <div className="col-details">
                <p>Visibilty</p>
                <p>{weatherDetails.visibility}km</p>
              </div>
            </div>
            {/* Wind Speed */}
            <div className="details-cols">
              <i className="fa-solid fa-wind"></i>
              <div className="col-details">
                <p>Wind Speed</p>
                <p>{weatherDetails.windspeed}km/h</p>
              </div>
            </div>
            {/* Wind Pressure */}
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
};

export default Home;
