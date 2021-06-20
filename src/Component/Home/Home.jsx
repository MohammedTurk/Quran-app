import React, { useContext } from "react";
import SectionHome from "./SectionHome/SectionHome";
import UserContext from "../Context";
function Home(props) {
  const TheContext = useContext(UserContext);
  return (
    <div className="container-fluid row mx-0  py-lg-5 my-lg-5 mt-3">
      <SectionHome />
    </div>
  );
}

export default Home;
