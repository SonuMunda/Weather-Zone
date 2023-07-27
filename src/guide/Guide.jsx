import "./Guide.css";
import { Link } from "react-router-dom";
const Guide = () => {
  return (
    <>
      <section className="guide-wrapper center">
        <div className="container">
          <h1 className="text-white font-bold text-3xl text-center">
            Guide and Usage
          </h1>
        </div>
      </section>
      <div className="guide-details center flex-col mt-5 mb-5">
        <div className="center">
          <h1 className="text-2xl p-2 font-bold text-orange">WeatherZone User Guide</h1>
        </div>
        <div className="guide-text p-3" style={{width:"95%"}}>
          <p>
            Welcome to WeatherZone! This user guide will help you understand how
            to use the app to get real-time weather data for your favorite
            cities.
          </p>
          <h2 className="text-orange">Getting Started</h2>
          <p>To use WeatherZone, follow these simple steps:</p>
          <ol className="steps-list">
            <li>Open the app in your web browser.</li>
            <li>On the Home page, you will see a search bar.</li>
            <li>
              Type the name of the city you want to check the weather for.
            </li>
            <li>Click the search button or press Enter.</li>
            <li>
              Weather data for the specified city will be displayed below the
              search bar.
            </li>
          </ol>
          <h2 className="text-orange">Weather Details</h2>
          <p>
            The app will show you various weather details for the selected city,
            including temperature, real feel, humidity, visibility, wind speed,
            and wind pressure.
          </p>
          <h2 className="text-orange">Mobile-Friendly Design</h2>
          <p>
            WeatherZone is designed to work on mobile devices as well. The
            app&apos;s layout will adjust to smaller screens, providing a
            seamless experience on your smartphone or tablet.
          </p>
          <h2 className="text-orange text-xl font-bold">Installation</h2>
          <ul>
            <li>
              Step 1 : Go to AccuWeather developer page.
              <Link to = "https://developer.accuweather.com/accuweather-forecast-api/apis" className="text-sm text-orange ms-1">Click Here</Link>
            </li>
            <li>Step 2 : Create your account.</li>
            <li>Step 3 : Log in to your account.</li>
            <li>Step 4 : Create a New App.</li>
            <li>Step 5 : Fill App Details.</li>
            <li>Step 6 : Get the API Key.</li>
            <li>Step 7 : Copy the API Key.</li>
            <li>Step 8 : Open GitBash.</li>
            <li>
              Step 9 : Copy the command given below:-
              <br />
              <span className="text-orange text-sm">
                https://github.com/SonuMunda/Weather-Zone.git
              </span>
            </li>
            <li>Step 10 : Paste the command and press Enter.</li>
            <li>
              Step 11 : Now type
              <span className="text-orange ms-1">cd WeatherZone</span> on GitBash
              then Enter
            </li>
            <li>
              Step 12 : Install dependencies using
              <span className="text-orange"> npm install</span> command
            </li>
            <li>
              Step 13 : Start the Application using
              <span className="text-orange"> npm run dev</span> command
            </li>
            <li>
              Step 14 : Copy or click the link you got
              <span className="text-orange"> http://localhost:5173</span> like this.
            </li>
            <li>
              Step 15 : Enjoy the Application
              <span className="text-orange"> :-) </span> .
            </li>
          </ul>
          <p>
            Thank you for using WeatherZone! We hope you find it helpful for
            checking the weather in your favorite cities.
          </p>
        </div>
      </div>
    </>
  );
};

export default Guide;
