import React from "react";
import FavoriteReaders from "./FavoriteReaders";

function Favourite(props) {
  return (
    <div>
      <section className="fav-section  mt-5 col-md-9 col-12 mb-5 pb-5">
        <div className="fav-div">
          <div className="mask-fav-div"></div>
          <FavoriteReaders />
        </div>
      </section>
    </div>
  );
}

export default Favourite;
