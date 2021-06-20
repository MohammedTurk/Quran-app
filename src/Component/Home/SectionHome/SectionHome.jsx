import React from "react";
import Reader from "./Reader";
import { ProvideConsumer } from "../../Context";
import ToolsReaders from "./ToolsReaders";
import SkeletonReaders from "../../Skeleton/Skeletons/SkeletonReaders/SkeletonReaders";

function SectionHome(props) {
  return (
    <section
      className=" col-lg-9 col-12 order-1 order-lg-0 row readers-menu  mr-0 "
      style={{ marginTop: "20px" }}
    >
      <ToolsReaders />
      <ProvideConsumer>
        {(value) => {
          let count = 0;
          if (value.mainReaders) {
            return value.mainReaders.map((item) => {
              count++;
              return (
                <div
                  key={item.id}
                  className={
                    value.order === true
                      ? "col-lg-4 col-6  d-flex justify-content-between"
                      : "col-12 d-flex justify-content-between"
                  }
                >
                  <Reader item={item} count={count} />
                </div>
              );
            });
          } else if (!value.mainReaders) {
            return (
              <div className=" row">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((skeleton) => {
                  return (
                    <div
                      className={
                        value.order === true
                          ? "col-lg-4 col-6  d-flex justify-content-between"
                          : "col-12 d-flex justify-content-between"
                      }
                    >
                      <SkeletonReaders />
                    </div>
                  );
                })}
              </div>
            );
          }
        }}
      </ProvideConsumer>
    </section>
  );
}

export default SectionHome;
