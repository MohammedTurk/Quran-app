import React, { useEffect, useState } from "react";
import Suars from "./Surras/Suars";
import SkeletonSurras from "../../../Skeleton/Skeletons/SkeletonSurra/SkeletonSurras";
import axios from "axios";

function ReaderElement({ match }) {
  const [reader, setReader] = useState({});
  useEffect(async () => {
    const { id } = match.params;
    const { data } = await axios.get(
      `https://qurani-api.herokuapp.com/api/reciters/${id}`
    );
    setReader(data);
  }, []);
  return (
    <div className="py-lg-5 my-lg-5">
      <div className="col-lg-9 col-12 order-1 order-md-0">
        {Object.keys(reader).length !== 0 ? (
          <Suars item={reader} />
        ) : (
          <SkeletonSurras />
        )}
      </div>
    </div>
  );
}

export default ReaderElement;
