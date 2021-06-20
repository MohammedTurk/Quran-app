import React, { useContext } from "react";
import "./Tafseer.css";
import UserContext from "../Context";
import { NavLink } from "react-router-dom";
function SurraTafseerElement({ item }) {
  const TheContext = useContext(UserContext);
  return (
    <div className="col-lg-4 col-12  my-2 ">
      <div className="tafseer-element ">
        <NavLink
          to={`/ts${item.index}`}
          className="d-flex justify-content-between align-items-center"
        >
          <h4 className="m-0">{item.name}</h4>
          <span>{item.index}</span>
        </NavLink>
      </div>
    </div>
  );
}

export default SurraTafseerElement;
