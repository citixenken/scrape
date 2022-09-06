import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Articles from "../articles/Articles";
import Readers from "../readers/Readers";
import Reviews from "../reviews/Reviews";

function App() {
  return (
    <div className="ui container main-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/readers" element={<BookDetails />} />
          <Route
            path="*"
            element={<h2 style={{ color: "red" }}>404 Page Not Found</h2>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
