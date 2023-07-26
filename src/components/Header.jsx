import "./Header.css";
const Header = () => {
  return (
    <header className="center">
      <div className="container around">
        <div className="brand">
          <img src="/favicon.png" alt="icon" />
          <h1 className="text-xl font-bold">WeatherZone</h1>
        </div>
        <nav className="navbar">
          <ul className="nav-links flex">
            <li className="list-item">
              <a href="" className="nav-link">
                Home
              </a>
            </li>
            <li className="list-item">
              <a href="" className="nav-link">
                About
              </a>
            </li>
            <li className="list-item">
              <a href="" className="nav-link">
                Usage Guide
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
