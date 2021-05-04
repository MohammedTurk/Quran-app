import React, { useContext } from "react";
import styled from "styled-components";
import "../../Home/Home.css";
import menu from "../../../menu.svg";
import menu2 from "../../../menu2.svg";
import UserContext from "../../Context";
function ToolsReaders(props) {
  const TheContext = useContext(UserContext);
  const setRewaya = new Set();
  TheContext.allReaders.map((item) => {
    setRewaya.add(item.rewaya);
  });
  let arr = [];

  setRewaya.forEach((e) => {
    arr.push(e);
  });
  console.log(arr);
  return (
    <div className="col-12 d-flex mb-4">
      <div className="tool-input d-block d-md-flex col-10 ">
        <Input
          type="email"
          className="form-control ml-md-3 mb-md-0 mb-2"
          id="exampleInputEmail2"
          aria-describedby="emailHelp"
          placeholder="ابحث باسم القارئ"
          onChange={TheContext.handleSearch}
        />

        <div className="select-rewaya w-100 position-relative">
          <Input
            type="email"
            className="form-control"
            id="exampleInputEmail3"
            aria-describedby="emailHelp"
            placeholder="اختر الرواية / نوع المصحف"
          />
          <span className="arrow-select position-absolute">
            <i className="fa fa-chevron-down"></i>
          </span>
          <div className="rewayat-div">
            {/* {setRewaya.map(i=>{

            })} */}
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
}

export default ToolsReaders;
const Input = styled.input`
  //   width: 100%;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  &:active,
  &:focus {
    box-shadow: none;
    border-color: #ff699d;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
