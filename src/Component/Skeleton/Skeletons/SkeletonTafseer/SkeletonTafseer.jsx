import React from "react";
import ItemTafseerSkeleton from "./ItemTafseerSkeleton";
function SkeletonTafseer(props) {
  return (
    <div className="col-12 ">
      <div className="skeleton-container-tafseer">
        <div className="row ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((skeleton) => {
            return (
              <div className="col-lg-4 col-12 mx-auto m-0 mb-4">
                <ItemTafseerSkeleton key={skeleton} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkeletonTafseer;
