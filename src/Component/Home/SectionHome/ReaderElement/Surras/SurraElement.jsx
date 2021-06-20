import React, { useContext } from "react";
import UserContext from "../../../../Context";
import "../../../Home.css";
function SurraElement({ surra, item }) {
  const TheContext = useContext(UserContext);
  return (
    <div
      key={surra.id}
      className={
        TheContext.order === true
          ? "col-lg-4 col-md-6 col-12  text-right div-area position-relative my-2 "
          : "col-12  text-right div-area position-relative my-2 "
      }
    >
      <div
        className={
          TheContext.activeSurra === surra
            ? "div-surra active-surra "
            : "div-surra"
        }
      >
        <span>
          <h4 className="pt-2 mb-1">{surra.name}</h4>
          <h6>{item.name}</h6>
        </span>
      </div>
      <span
        className="play-icon d-flex justify-content-center align-items-center"
        onClick={() => TheContext.playSurra(surra)}
      >
        <i className="fa fa-play"></i>
      </span>
    </div>
  );
}

export default SurraElement;
