import { useEffect, useState } from "react";
import "./Home.css";
import {
  MdSearch,
  MdVisibility,
  MdWaterDrop,
  MdWindPower,
} from "react-icons/md";
import { FaGaugeHigh } from "react-icons/fa6";

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
    if (city === "") {
      alert("Please enter a city name");
    }
    fetchData(city);
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
    <main className="main-wrapper center mt-14 md:m-0">
      <div className="container max-w-4xl center flex-col gap-5 p-4">
        {/* Page title */}
        <h1 className="page-title text-3xl font-bold text-center">
          Weather Zone
        </h1>

        <p className="text-gray-700">
          Get the latest weather details for any city around the world. Enter
        </p>


        {/* City search form */}
        <div className="search center w-full">
          <form onSubmit={handleSubmit} className="search-form w-full">
            <div className="form-group relative w-full  mx-auto">
              <input
                type="text"
                className="search-bar rounded-3xl w-full bg-blue-50 px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Search for a city"
                name="cityName"
                value={city}
                onChange={handleChange}
                aria-label="Search for a city"
              />
              <button
                type="submit"
                className="search-btn p-3 rounded-full absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-blue-100 transition-all duration-300"
                aria-label="Search"
              >
                <MdSearch size={28} className="text-blue-600" />
              </button>
            </div>
          </form>
        </div>

        {/* Weather details section */}
        <div className="weather-details grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* City name, weather type, and temperature */}
          <div className="city-weather-details bg-blue-50 rounded-3xl p-5">
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
                src={
                  `./images/weather-icons/${weatherDetails.Icon}.png` ||
                  "https://github.com/SonuMunda/Weather-Zone/blob/main/public/images/weather-icons/1.png"
                }
                alt={weatherDetails.Type || "Sunny"}
                className="weather-icon"
              />
              <p className="text-4xl">
                {weatherDetails.Temperature || 0}
                <span>&deg;</span>
                <span>C</span>
              </p>
            </div>
            <div className="real-feel m-2 flex align-items-center">
              <h6 className="font-bold">Real Feel</h6>
              <p className="px-2">
                {weatherDetails.realFeel || 0}
                <span>&deg;C</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Humidity */}
            <div className="details-cols rounded-3xl bg-blue-50">
              <div className="icon">
                <MdWaterDrop size={30} />
              </div>
              <div className="col-details">
                <p>Humidity</p>
                <p>{weatherDetails.humidity || 0}%</p>
              </div>
            </div>
            {/* Visibility */}
            <div className="details-cols rounded-3xl bg-blue-50">
              <MdVisibility size={24} />
              <div className="col-details">
                <p>Visibilty</p>
                <p>{weatherDetails.visibility || 0}km</p>
              </div>
            </div>
            {/* Wind Speed */}
            <div className="details-cols rounded-3xl bg-blue-50">
              <MdWindPower size={24} />
              <div className="col-details">
                <p>Wind Speed</p>
                <p>{weatherDetails.windspeed || 0}km/h</p>
              </div>
            </div>
            {/* Wind Pressure */}
            <div className="details-cols rounded-3xl bg-blue-50">
              <FaGaugeHigh size={24} />
              <div className="col-details">
                <p>Wind Pressure</p>
                <p>{weatherDetails.windpressure || 0}inHg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
