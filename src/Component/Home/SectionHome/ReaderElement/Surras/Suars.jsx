import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../../../Context";
import menu from "../../../../../menu.svg";
import menu2 from "../../../../../menu2.svg";
import SurraElement from "./SurraElement";
function Suars({ item }) {
  const { surasData } = item;
  const TheContext = useContext(UserContext);
  const [searchSurra, setSearchSurra] = useState([]);
  const handleSearch = (value) => {
    const newSuras = surasData.filter((f) => {
      return f.name.indexOf(value) !== -1;
    });
    setSearchSurra(newSuras);
  };
  useEffect(() => {
    TheContext.playSurra(surasData[0]);
  }, []);
  return (
    <div className="row  mx-auto parent-div-reader ">
      <div className="row col-md-12 text-right d-flex justify-content-between mb-md-4 p-0 pl-md-3 m-0">
        <div className="title-reader col-md-6 col-12 mb-3 mb-md-0">
          <h3>
            {item.name} - {item.rewaya}
          </h3>
        </div>
        <div className=" col-md-5 col-12 p-0 m-0  mb-3 mb-md-0">
          <input
            type="text"
            id="search-surra"
            placeholder="ابحث باسم السورة"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div className="col-1 tools d-none d-md-flex justify-content-end align-items-center p-0">
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
      </div>
      {searchSurra.length !== 0
        ? searchSurra.map((surra) => (
            <SurraElement surra={surra} item={item} key={surra.id} />
          ))
        : surasData.map((surra) => (
            <SurraElement surra={surra} item={item} key={surra.id} />
          ))}
    </div>
  );
}

export default Suars;
