import React from "react";
import Reader from "./Reader";
import { ProvideConsumer } from "../../Context";
import ToolsReaders from "./ToolsReaders";

function SectionHome(props) {
  return (
    <section className="col-lg-9 col-12 order-1 order-lg-0 row readers-menu m-0 ">
      <ToolsReaders />
      <ProvideConsumer>
        {(value) => {
          let count = 0;
          if (value.mainReaders.length !== 0) {
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
          } else if (value.mainReaders.length === 0) {
            return value.allReaders.map((item) => {
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
          }
          // return value.allReaders.map((item) => {
          //   count++;

          //   return (
          //     <div
          //       key={item.id}
          //       className={
          //         value.order === true
          //           ? "col-lg-4 col-md-6 col-12 d-flex justify-content-between"
          //           : "col-12 d-flex justify-content-between"
          //       }
          //     >
          //       <Reader item={item} count={count} />
          //     </div>
          //   );
          // });
        }}
      </ProvideConsumer>
    </section>
  );
}

export default SectionHome;
