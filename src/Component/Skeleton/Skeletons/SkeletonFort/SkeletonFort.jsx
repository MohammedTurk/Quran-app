import React from "react";
import ItemFortSkeleton from "./ItemFortSkeleton";
function SkeletonFort(props) {
  return (
    <div className="col-12 ">
      <div className="skeleton-container-fort ">
        <div className="row ">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((skeleton) => {
            return (
              <div className="col-lg-6 col-12 mx-auto m-0">
                <ItemFortSkeleton key={skeleton} theKey={skeleton} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkeletonFort;
