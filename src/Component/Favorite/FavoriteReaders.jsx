import React, { useContext } from "react";
import { ProvideConsumer } from "../Context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserContext from "../Context";

import "./Favoritr.css";
function FavoriteReaders(props) {
  const TheContext = useContext(UserContext);

  return (
    <div className=" body-fav px-3 d-flex row ">
      <div className="header-fav col-12 d-flex justify-content-between my-3 row">
        <div className="col-10 text-right">
          <h3 className=" title-fav">المفضلة من القرّاء </h3>
        </div>
      </div>
      <ProvideConsumer>
        {(value) => {
          if (value.favArray.length === 0) {
            return <div className="alert-message ">لا يوجد قرّاء</div>;
          } else {
            return value.favArray.map((item) => {
              return (
                <div className=" col-md-4 col-12 d-flex justify-content-between">
                  <ReaderItem id="reader-item" className="fav-item">
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
                </div>
              );
            });
          }
        }}
      </ProvideConsumer>
    </div>
  );
}
export default FavoriteReaders;
const ReaderItem = styled.div`
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);

  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  a:hover {
    color: #6c757d;
    text-decoration: none;
  }
`;
