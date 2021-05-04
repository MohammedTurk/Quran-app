import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../Context";
import heart from "../../../heart.svg";
import heart2 from "../../../heart2.svg";

import "../Home.css";
function Reader({ item, count, readerInfo }) {
  const TheContext = useContext(UserContext);
  return (
    <ReaderItem id="reader-item">
      <div className="head-reader d-flex justify-content-between mb-4">
        <span className="icon-fav" onClick={() => TheContext.addToFav(item)}>
          <img src={item.inFav === false ? heart : heart2} alt="" />
        </span>
        <span className="num-reader">{count}</span>
      </div>
      <Link
        onClick={() => {
          TheContext.readerInfo(item);
        }}
        to={item.id}
        className="info-reader align-items-end flex-column text-right"
      >
        <h4>{item.name}</h4>
        <h6>{item.rewaya}</h6>
      </Link>
    </ReaderItem>
  );
}

export default Reader;
const ReaderItem = styled.div`
  background-color: #fff;
  margin: 5px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);

  border-radius: 15px;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  a:hover {
    color: #6c757d;
    text-decoration: none;
  }
`;
