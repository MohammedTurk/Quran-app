import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTafseerSkeletone from "../Skeleton/Skeletons/SkeletonTafseer/DataTafseerSkeleton";
import SkeletonElement from "../Skeleton/SkeletonElement";

function FortItem({ match }) {
  const [itemFort, setItemFort] = useState();
  const [fortTitle, setFortTitle] = useState();
  const { id } = match.params;
  useEffect(async () => {
    const { data: ItemFort } = await axios.get(
      `http://www.mp3quran.net/api/husn/ar/${id}.json`
    );
    setItemFort(ItemFort[Object.keys(ItemFort)]);
    setFortTitle([Object.keys(ItemFort)]);
  }, []);

  return (
    <section className="fort-section col-lg-9 py-lg-5 my-lg-5">
      <div className="fort-div ">
        <div className="mx-auto">
          <div className="fort-content text-right">
            {itemFort ? (
              <React.Fragment>
                <h2 className="mb-4 pr-2">{fortTitle}.</h2>
                {itemFort.map((item) => {
                  return (
                    <div className="text-fort col-12  p-2" key={item.ID}>
                      <p>{item.Text}</p>
                    </div>
                  );
                })}
              </React.Fragment>
            ) : (
              <div className="col-12">
                <div className="col-6 title-skeletone-fort mb-4 pr-1 mr-1">
                  <SkeletonElement type="name" />
                </div>
                <DataTafseerSkeletone />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FortItem;
