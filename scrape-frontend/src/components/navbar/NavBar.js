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
      <NavLink className=" teal header item" to="/">
        Articles
      </NavLink>
      <NavLink className="teal item" to="/week">
        Reviews
      </NavLink>
      <NavLink className="teal item" to="/mylibrary">
        Readers
      </NavLink>
    </nav>
  );
}

export default NavBar;
