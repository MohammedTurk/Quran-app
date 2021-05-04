import React, { useContext } from "react";
import { ProvideConsumer } from "../Context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserContext from "../Context";
import menu from "../../menu.svg";
import menu2 from "../../menu2.svg";

import "./Favoritr.css";
function FavoriteReaders(props) {
  const TheContext = useContext(UserContext);

  return (
    <section className="fav-section mt-5  col-md-9 col-12  ">
      <div className="fav-div col-12  ">
        <div className="head-fav d-flex justify-content-between px-3 py-3">
          <h3 className="  pr-1">افضل القرّاء </h3>
          <div className="tools col-md-2 d-none d-md-flex justify-content-end align-items-center pl-0">
            <span
              className="pr-3 order-1"
              onClick={() => TheContext.setOrder(true)}
            >
              <img src={menu} alt="" />
            </span>
            <span
              className="order-0"
              onClick={() => TheContext.setOrder(false)}
            >
              <img src={menu2} alt="" />
            </span>
          </div>
        </div>
        <div className="body-fav px-3 d-flex row ">
          <ProvideConsumer>
            {(value) => {
              return value.favArray.map((item) => {
                return (
                  <div
                    className={
                      value.order === true
                        ? "col-lg-4 col-md-6 col-12 d-flex justify-content-between"
                        : "col-12 d-flex justify-content-between"
                    }
                  >
                    <ReaderItem id="reader-item">
                      {/* <div className="head-reader d-flex justify-content-between mb-4 ">
                        <span className="num-reader">{count}</span>
                      </div> */}
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
            }}
          </ProvideConsumer>
        </div>
      </div>
    </section>
  );
}
export default FavoriteReaders;
const ReaderItem = styled.div`
  background-color: #fff;
  // margin: 5px;
  padding: 20px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);

  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  a:hover {
    color: #6c757d;
    text-decoration: none;
  }
`;
