import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBarComponent() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="icon">
            <h3>
              {"<"}/{">"}
            </h3>
          </li>

          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/activities">Activities</NavLink>
          </li>
          <li>
            <NavLink to="https://medium.com/">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact us</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
