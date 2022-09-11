import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Landing from "../landing/Landing";
import Articles from "../articles/Articles";
import Readers from "../readers/Readers";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";
import AddArticle from "../addarticle/AddArticle";

function App() {
  return (
    <div className="ui container main-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/readers" element={<Readers />} />
          <Route path="/add_article" element={<AddArticle />} />
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
