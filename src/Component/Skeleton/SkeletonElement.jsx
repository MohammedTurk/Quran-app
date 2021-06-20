import React from "react";
import "./Skeleton.css";

function SkeletonElement({ type }) {
  const classes = `skeleton-${type}`;
  return (
    <div className={classes}>
      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  );
}

export default SkeletonElement;
