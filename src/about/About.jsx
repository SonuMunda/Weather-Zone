import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about-wrapper center">
        <div className="container">
          <h1 className="text-white font-bold text-4xl text-center">
            About App
          </h1>
        </div>
      </section>
      <section className="about center">
        <div className="container center  flex-col p-4">
          <div className="title">
            <h1>Weather Zone</h1>
          </div>
          <div className="about-details">
            <div className="text">
              <p>
                WeatherZone is a simple weather application that provides
                real-time weather data for cities around the world. It uses the
                AccuWeather API to fetch weather information based on user
                input.
              </p>
              <p>
                This app is built using React + Vite and utilizes React Router
                for navigation. It demonstrates how to fetch data from an
                external API and display it in a user-friendly format.
              </p>
              <p>
                Weather data, including temperature, real feel, humidity,
                visibility, wind speed, and wind pressure, is shown for the
                specified city. The app also includes a mobile-friendly design
                for users on smaller devices.
              </p>
              <p>
                Thank you for using WeatherZone! We hope you find it useful for
                checking the weather in your favorite cities.
              </p>
              <p>
                The source code for WeatherZone is freely available on GitHub.
                You can find it at:
                <Link
                  to="https://github.com/SonuMunda/Weather-Zone"
                  className="ms-2"
                  style={{ color: "orangered" }}
                >
                  Click Here to get source code
                </Link>
              </p>
              <h6 className="font-bold text-red-500">Important Note :-</h6>
              <p>Use your own API Key</p>

              <p>Go to Usage Guide Page for Usage and Guide to use App</p>
            </div>
          </div>
        </div>
      </section>
      <div className="dev p-4 bg-gray-900">
        <p className="text-center text-white">Developed by Sonu Munda.</p>
      </div>
    </>
  );
};

export default About;
