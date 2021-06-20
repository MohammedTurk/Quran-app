import React from "react";
import ItemSurraSkeleton from "./ItemSurraSkeleton";

function SkeletonSurras(props) {
  return (
    <div className="col-12 ">
      <div className="skeleton-container-surra ">
        <div className="row  ">
          {[1, 22, 33, 44, 55, 66, 77, 88, 99].map((skeleton) => {
            return (
              <div className="col-lg-4 col-6 mx-auto m-0">
                <ItemSurraSkeleton key={skeleton} countForKey={skeleton} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkeletonSurras;
