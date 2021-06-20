import React, { useState, useEffect } from "react";
import axios from "axios";
import SurraTafseerElement from "./SurraTafseerElement";
import "./Tafseer.css";
import SkeletonTafseer from "../Skeleton/Skeletons/SkeletonTafseer/SkeletonTafseer";
import { Input } from "../Input";
function TafseerHome(props) {
  const [allSurrasTs, setallSurrasTs] = useState([]);
  const [searchTafseer, setSearchTafseer] = useState([]);
  useEffect(async () => {
    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/http://api.quran-tafseer.com/quran/"
    );
    setallSurrasTs(data);
  }, []);
  const handleSearch = (value) => {
    const newArray = allSurrasTs.filter((f) => f.name.indexOf(value) !== -1);
    setSearchTafseer(newArray);
  };
  return (
    <section className="section-tafseer  col-lg-9 py-lg-5 my-lg-5">
      <div className="tafseer-div ">
        <div className="tafseer-head mb-3 row m-0">
          <div className="title text-right  col-6 ">
            <h2>ddd</h2>
            <h2>تفسير القرآن الكريم.</h2>
          </div>
          <div className="tafseer-search col-6 d-flex align-items-center justify-content-end">
            <Input
              type="textsearch"
              placeholder="ابحث باسم السورة"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        {allSurrasTs.length > 0 ? (
          searchTafseer.length > 0 ? (
            <div className="row mx-auto ">
              {searchTafseer.map((item) => {
                return <SurraTafseerElement item={item} key={item.index} />;
              })}
            </div>
          ) : (
            <div className="row mx-auto ">
              {allSurrasTs.map((item) => {
                return <SurraTafseerElement item={item} key={item.index} />;
              })}
            </div>
          )
        ) : (
          <SkeletonTafseer />
        )}
      </div>
    </section>
  );
}

export default TafseerHome;
// ssssssssssssssss
