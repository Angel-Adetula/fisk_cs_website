import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../images/logo.png";

export default function NavBarComponent() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div>
            <img className="icon" src={logo} alt="CS Club Logo"></img>
          </div>
          <div className="nav-elements">
            <ul>
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
          </div>
        </div>
      </nav>
    </>
  );
}
