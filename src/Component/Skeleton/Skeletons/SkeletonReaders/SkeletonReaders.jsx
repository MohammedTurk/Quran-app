import React from "react";
import SkeletonElement from "../../SkeletonElement";

function SkeletonReaders(props) {
  return (
    <div className="skeleton-wrapper-readers">
      <div className="head-skeleton d-flex justify-content-between">
        <SkeletonElement type="icon" />
        <SkeletonElement type="icon" />
      </div>
      <div className="body-skeleton d-flex flex-column align-items-between">
        <SkeletonElement type="head" />
        <SkeletonElement type="text" />
      </div>
    </div>
  );
}

export default SkeletonReaders;
