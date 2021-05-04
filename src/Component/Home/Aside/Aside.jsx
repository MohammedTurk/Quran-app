import React, { useContext } from "react";
import UserContext from "../../Context";
import user from "../../../user.svg";
import "../Home.css";

function Aside(props) {
  const TheContext = useContext(UserContext);
  return (
    <aside className="col-lg-3  col-12 order-0 order-lg-1  pt-5 mt-4 mx-auto">
      <div className="head-area d-flex justify-content-center align-items-center">
        <span>الملحقات</span>

        <span className="img-aside mr-3">
          <img src={user}></img>
        </span>
      </div>
      <div className="body-area">
        <div className="social-area d-flex  my-4 align-items-center justify-content-center ">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100009186716923"
            className="soial-item"
          >
            <span>
              <i className="fa fa-facebook-f"></i>
            </span>
            <span>فيسبوك</span>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/mohammedturkk"
            className="soial-item"
          >
            <span>
              <i className="fa fa-twitter"></i>
            </span>
            <span>تويتر</span>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/mturk7/"
            className="soial-item"
          >
            <span>
              <i className="fa fa-instagram"></i>
            </span>
            <span>انستقرام</span>
          </a>
        </div>
        <div className="style-area mt-2 d-flex justify-content-center align-items-center">
          <button
            className={TheContext.Theme === "dark" ? "active" : ""}
            onClick={() => {
              TheContext.darkTheme();
            }}
          >
            داكن
          </button>
          <button
            className={TheContext.Theme === "light" ? "active" : ""}
            onClick={() => {
              TheContext.lightTheme();
            }}
          >
            مضيئ
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
