import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavForm from "./NavForm";
import NavMenu from "./NavMenu";
import styled from "styled-components";
import "./Navbar.css";
import menu from "../../../src/menu.svg";

function Navbar(props) {
  const toggler = () => {
    document.querySelector(".nav-menu").classList.toggle("active");
  };
  return (
    <div className="position-fixed fixed-top ">
      <nav className="navbar navbar-expand-lg navbar-light  d-flex justify-content-between align-items-center ">
        <Logo />
        <NavMenu />
        <NavForm />
        <BurgerButton
          id="burger-menu-btn"
          className="d-flex alighn-items-between flex-column d-lg-none "
          onClick={toggler}
        >
          <img src={menu} alt="" id="menu-icon" />
        </BurgerButton>
      </nav>
    </div>
  );
}

export default Navbar;

const BurgerButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
