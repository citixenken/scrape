import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="ui pointing massive stackable menu"
      style={{
        fontSize: 18,
        fontFamily: "Varela Round",
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
    </nav>
  );
}

export default NavBar;
