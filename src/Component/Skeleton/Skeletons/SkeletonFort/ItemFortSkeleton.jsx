import React from "react";
import SkeletonElement from "../../SkeletonElement";
function ItemFortSkeleton({ theKey }) {
  return (
    <div>
      <div className="skeleton-wrapper-fort row mx-0">
        <div className="col-6 d-flex  justify-content-center align-items-start pr-0">
          <SkeletonElement type="head" key={theKey} />
        </div>
      </div>
    </div>
  );
}

export default ItemFortSkeleton;
