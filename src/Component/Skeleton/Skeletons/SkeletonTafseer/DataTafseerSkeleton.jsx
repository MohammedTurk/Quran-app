import React from "react";
import SkeletonElement from "../../SkeletonElement";

function DataTafseerSkeletone(props) {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 145].map((skeleton) => {
        // to genarate numbers between 60 - 90
        let col = Math.floor(Math.random() * (90 - 60 + 1)) + 60;
        return (
          <div className={`text-right col-12 mx-auto m-0  p-2`}>
            <div style={{ width: `${col}%` }}>
              <SkeletonElement type="data" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DataTafseerSkeletone;
