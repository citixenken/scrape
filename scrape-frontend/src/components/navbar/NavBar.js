import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav
      // className="ui pointing massive stackable menu"
      className="ui pointing massive celled horizontal list"
      style={{
        fontSize: 18,
        fontFamily: "Varela Round",
        padding: 20,
      }}
    >
      <NavLink className="teal header item" to="/">
        Home
      </NavLink>
      <NavLink className="teal item" to="/articles">
        Articles
      </NavLink>
      <NavLink className="teal item" to="/reviews">
        Reviews
      </NavLink>
      <NavLink className="teal item" to="/readers">
        Readers
      </NavLink>
      <NavLink className="teal item" to="/add_article">
        Add Article
      </NavLink>
    </nav>
  );
}

export default NavBar;
