import axios from "axios";
import React, { useState, useEffect } from "react";
import DataTafseerSkeletone from "../Skeleton/Skeletons/SkeletonTafseer/DataTafseerSkeleton";
import SkeletonTafseer from "../Skeleton/Skeletons/SkeletonTafseer/SkeletonTafseer";
import "./Tafseer.css";
import TheTafseerAya from "./TheTafseerAya";
function SurraTafseerData({ match }) {
  const [tafseerData, setTafseerData] = useState({});
  const { id } = match.params;
  useEffect(async () => {
    const { data } = await axios.get(
      `https://api.alquran.cloud/v1/surah/${id}/ar.alafasy?fbclid=IwAR16fr7vDoad8AeoMu7_XYyvXUUMPcgTTFeX6gZy-fzRYY2uNr1mViCC4gI`
    );
    setTafseerData(data.data);
  }, []);
  console.log(tafseerData);
  const [showInter, setShowInter] = useState(false);
  const [detailsTafseer, SetDetailsTafseer] = useState("");
  const [ayaItem, setAya] = useState();
  const [ayaSearch, setAyaSearch] = useState(null);

  const handleClick = () => {
    setShowInter(false);
  };
  const handleDetails = async (aya, surra) => {
    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.quran-tafseer.com/tafseer/1/${surra.number}/${aya.numberInSurah}`
    );
    SetDetailsTafseer(data);
  };
  const handleSearch = (num) => {
    const surraTafseer = [...tafseerData.ayahs];
    const AyaSearch = surraTafseer.find((f) => f.numberInSurah == num);
    setAyaSearch(AyaSearch);
  };
  return (
    <section className="section-tafseer-data col-lg-9 py-lg-5 my-lg-5">
      {Object.keys(tafseerData).length > 0 ? (
        <div className="tafseer-div ">
          <div className=" d-flex justify-content-between align-items-center px-2  mt-3">
            <div className="surra-Tafseer-name text-right">
              <h3>{tafseerData.name}.</h3>
            </div>
            <div className="search-aya pr-4">
              <input
                type="number"
                min="0"
                placeholder="ابحث برقم الاية"
                onChange={(e) => handleSearch(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="aya-div">
            {ayaSearch !== null && ayaSearch !== undefined ? (
              <span
                onClick={() => {
                  setShowInter(true);
                  setAya(ayaSearch);
                  handleDetails(ayaSearch, tafseerData);
                }}
                key={ayaSearch.numberInSurah}
              >
                <span className="aya-span ">
                  <b> &#123; </b>
                  {`${ayaSearch.text}`}
                  <b> &#125;</b>
                </span>
                <b> * </b>
              </span>
            ) : (
              tafseerData.ayahs.map((aya) => (
                <span
                  onClick={() => {
                    setShowInter(true);
                    setAya(aya);
                    handleDetails(aya, tafseerData);
                  }}
                  key={aya.numberInSurah}
                >
                  <span className="aya-span ">
                    <b> &#123; </b>
                    {`${aya.text}`}
                    <b> &#125;</b>
                  </span>
                  <b> * </b>
                </span>
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="skeleton-tafseer-data">
          <DataTafseerSkeletone />
        </div>
      )}
      {showInter === true && (
        <TheTafseerAya
          showInter={showInter}
          handleClick={handleClick}
          detailsTafseer={detailsTafseer}
          ayaItem={ayaItem}
        />
      )}
    </section>
  );
}

export default SurraTafseerData;
