import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Articles from "../article/Article";
import Readers from "../reader/Reader";
import Reviews from "../review/Review";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className="ui container main-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/readers" element={<Readers />} />
          <Route
            path="*"
            element={<h2 style={{ color: "red" }}>404 Page Not Found</h2>}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
