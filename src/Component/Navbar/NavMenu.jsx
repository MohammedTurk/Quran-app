import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavMenu(props) {
  return (
    <div className="nav-menu">
      <div className="d-flex align-items-center">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              الرئيسية <span className="sr-only"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tv">
              الاذاعة
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link " to="/tc">
              حصن المسلم
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/favorite">
              المفضلة
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;
