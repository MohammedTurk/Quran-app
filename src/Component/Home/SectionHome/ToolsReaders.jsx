import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import "../../Home/Home.css";
import menu from "../../../menu.svg";
import menu2 from "../../../menu2.svg";
import UserContext from "../../Context";
import { Input } from "../../Input";
function ToolsReaders(props) {
  const [Active, setActive] = useState(false);
  const [ValueRewaya, setValueRewaya] = useState("");

  const handleActive = () => {
    setActive(!Active);
  };
  const TheContext = useContext(UserContext);
  const setRewaya = new Set();
  TheContext.allReaders.map((item) => {
    setRewaya.add(item.rewaya);
  });
  let arr = [];
  arr.unshift("الكل");

  const activeClass = classActive();

  setRewaya.forEach((e) => {
    arr.push(e);
  });
  const active = {
    transform: "rotate(180deg)",
  };

  return (
    <div className="col-12 d-flex mb-4">
      <div className="tool-input d-block d-md-flex col-10 justify-content-between">
        <div className="input-search w-100 ml-2">
          <Input
            type="textsearch"
            className="form-control ml-md-3 mb-md-0 mb-2"
            id="textsearch"
            aria-describedby="emailHelp"
            placeholder="ابحث باسم القارئ
            "
            onChange={TheContext.handleSearch}
          />
        </div>
        <div
          className="select-rewaya w-100 position-relative"
          onClick={handleActive}
        >
          <div className="selected position-relative">
            <div className="value-selected form-control" tabIndex="1">
              اختر الرواية / نوع المصحف
            </div>

            <span
              className="arrow-select position-absolute"
              style={Active === true ? { ...active } : {}}
            >
              <i className="fa fa-chevron-down"></i>
            </span>
          </div>

          <div className={activeClass}>
            {arr.map((item, index) => {
              return (
                <div
                  key={index}
                  className="option"
                  onClick={() => TheContext.handleSelectedValue(item)}
                >
                  <label>{item}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="tools col-md-2 d-flex justify-content-end align-items-center">
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
  );
  function classActive() {
    if (Active === true) {
      return "container-options position-absolute active";
    } else {
      return "container-options position-absolute ";
    }
  }
}

export default ToolsReaders;
