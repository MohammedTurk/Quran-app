import React from "react";

function TheTafseerAya({ showInter, handleClick, detailsTafseer, ayaItem }) {
  console.log(detailsTafseer);
  return (
    <div className="">
      <div
        className={
          showInter === true ? "tafseer-Interface active" : "tafseer-Interface"
        }
        onClick={handleClick}
      ></div>
      <div className="tafseer-content">
        <h3 className="py-1">{ayaItem.text}.</h3>
        <p>{detailsTafseer.text}</p>
      </div>
    </div>
  );
}

export default TheTafseerAya;
