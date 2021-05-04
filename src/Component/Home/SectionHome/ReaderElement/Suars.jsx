import React, { useContext } from "react";
import { ProvideConsumer } from "../../../Context";
import UserContext from "../../../Context";

function Suars({ item }) {
  const TheContext = useContext(UserContext);

  return (
    <div className="row mt-4 parent-div-reader m-2">
      <ProvideConsumer>
        {(value) => {
          return value.reader.surasData.map((surra) => {
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
                  <span className=" d-flex justify-content-start  my-2">
                    <i className="fa fa-heart fav-icon ml-2"></i>
                    <i className="fa fa-share"></i>
                  </span>
                </div>
                <span
                  className="play-icon d-flex justify-content-center align-items-center"
                  onClick={() => value.playSurra(surra)}
                >
                  <i className="fa fa-play"></i>
                </span>
              </div>
            );
          });
        }}
      </ProvideConsumer>
    </div>
  );
}

export default Suars;
