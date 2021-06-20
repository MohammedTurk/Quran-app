import React from "react";
import SkeletonElement from "../../SkeletonElement";

function ItemSurraSkeleton({ countForKey }) {
  countForKey += 1;
  return (
    <div className="skeleton-wrapper-surras row mx-0">
      <div className="col-8 d-flex flex-column justify-content-center align-items-start mb-2">
        <SkeletonElement type="head" key={countForKey} />
        <SkeletonElement type="text" key={countForKey + 1} />
      </div>
      <div className="col-4 d-flex align-items-center justify-content-end">
        <SkeletonElement type="icon" key={countForKey + 2} />
      </div>
    </div>
  );
}

export default ItemSurraSkeleton;
