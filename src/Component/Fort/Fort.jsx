import React, { useEffect, useState, useContext } from "react";
import "./Fort.css";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../Context";
import SkeletonFort from "../Skeleton/Skeletons/SkeletonFort/SkeletonFort";
import { Input } from "../Input";
function Fort(props) {
  const TheContext = useContext(UserContext);
  const [apiFort, setApi] = useState([]);
  const [searchFort, setSearchFort] = useState([]);
  const handleSearch = (value) => {
    const newArray = apiFort.filter((f) => f.Title.indexOf(value) !== -1);
    setSearchFort(newArray);
  };
  useEffect(async () => {
    const { data } = await axios.get(
      "https://mp3quran.net/api/husn/ar/husn_ar.json?fbclid=IwAR2vi2p2UnlgV3jATGyX7-NxPB0_CW8MzDFq5-nJpQJ5r9jPv1Z69gydB54"
    );
    setApi(data.العربية);
  });
  return (
    <section className="fort-section col-lg-9 py-lg-5 my-lg-5">
      <div className="fort-div ">
        <div className="head-fort d-flex justify-content-between align-items-center">
          <div className="title text-right mt-1 pr-2 mb-3 mr-1">
            <h2> حصن المسلم.</h2>
          </div>
          <div className="search-fort ml-3">
            <Input
              type="text"
              className=""
              id="textsearch"
              aria-describedby="emailHelp"
              placeholder="ابحث هنا"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="row mx-auto">
          {apiFort.length > 0 ? (
            searchFort.length !== 0 ? (
              searchFort.map((item) => (
                <div
                  className="fort-div-element col-lg-6 col-12 my-2"
                  key={item.ID}
                >
                  <NavLink
                    to={`/fo/${item.ID}`}
                    className="fort-element d-flex justify-content-start align-items-center"
                    onClick={() => TheContext.setFortItem(item)}
                  >
                    <p className="mb-0">{item.Title}</p>
                  </NavLink>
                </div>
              ))
            ) : (
              apiFort.map((item) => (
                <div
                  className="fort-div-element col-lg-6 col-12 my-2"
                  key={item.ID}
                >
                  <NavLink
                    to={`/fo/${item.ID}`}
                    className="fort-element d-flex justify-content-start align-items-center"
                    onClick={() => TheContext.setFortItem(item)}
                  >
                    <p className="mb-0">{item.Title}</p>
                  </NavLink>
                </div>
              ))
            )
          ) : (
            <SkeletonFort />
          )}
        </div>
      </div>
    </section>
  );
}

export default Fort;
