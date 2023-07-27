import Header from "./components/Header";
import Home from "./home/Home";
import About from "./about/About";
import Guide from "./guide/Guide";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
