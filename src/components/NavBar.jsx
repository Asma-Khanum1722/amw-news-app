import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img className="logo-img" src="../src/assets/file.png" alt="logo" />
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-element" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? "active-element" : "")}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-element" : "")}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active-element" : "")}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-element" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
