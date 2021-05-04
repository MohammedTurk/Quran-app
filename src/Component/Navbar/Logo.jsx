import React from "react";
import { NavLink } from "react-router-dom";
import quran from "../../quran.svg";
function Logo(props) {
  const svgStyle = {
    width: "1.3em",
  };
  return (
    <div className="logo d-flex align-items-center">
      <img src={quran} alt="" style={svgStyle} />
      <span className="d-flex justify-context-center ">
        <NavLink className="navbar-brand mr-1" to="/">
          القرآن الكريم
        </NavLink>
      </span>
    </div>
  );
}

export default Logo;
