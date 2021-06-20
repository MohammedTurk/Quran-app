import React from "react";
import SkeletonElement from "../../SkeletonElement";
function ItemTafseerSkeleton(props) {
  return (
    <div className="skeleton-wrapper-tafseer">
      <div className="  d-flex  justify-content-between align-items-center  mx-3">
        <SkeletonElement type="name" />
        <SkeletonElement type="icon" />
      </div>
    </div>
  );
}

export default ItemTafseerSkeleton;
