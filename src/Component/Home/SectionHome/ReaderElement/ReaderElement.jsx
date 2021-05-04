import React, { useEffect, useState, useContext } from "react";
import UserContext, { ProvideConsumer } from "../../../Context";
import Suars from "./Suars";
import Audio from "./Audio";
import menu from "../../../../menu.svg";
import menu2 from "../../../../menu2.svg";

function ReaderElement({ item }) {
  const TheContext = useContext(UserContext);
  useEffect(() => {
    const TheReader = TheContext.reader;
    TheContext.playSurra(TheReader.surasData[0]);
  }, []);
  return (
    <div className="ml-4   py-md-5 my-md-5 ">
      <div className="col-md-9 col-12 order-1 order-md-0 mt-4  ml-2 row readers-menu ml-auto mr-3">
        <h3 className="col-md-9 text-right">
          {item.name} - {item.rewaya}
        </h3>
        <div className="tools col-md-3 d-none d-md-flex justify-content-end align-items-center pl-4">
          <span
            className="pr-3 order-1"
            onClick={() => TheContext.setOrder(true)}
          >
            <img src={menu} alt="" />
          </span>
          <span className="order-0" onClick={() => TheContext.setOrder(false)}>
            <img src={menu2} alt="" />
          </span>
        </div>
        <Suars item={item} />
        <Audio />
      </div>
    </div>
  );
}

export default ReaderElement;
