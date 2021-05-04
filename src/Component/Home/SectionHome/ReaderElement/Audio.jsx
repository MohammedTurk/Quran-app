import React, { useContext } from "react";
import UserContext from "../../../Context";

function Audio(props) {
  const TheContext = useContext(UserContext);
  return (
    <div>
      <audio src={TheContext.surra} controls autoPlay></audio>{" "}
    </div>
  );
}

export default Audio;

// let ActiveSurra = active(TheContext, surra);

// function active(TheContext, surra) {
//   let ActiveSurra =
//     "d-flex flex-column pr-2  justify-content-between surra-area";
//   if (TheContext.activeSurra === surra) {
//     ActiveSurra += " active-surra";
//   } else {
//     ActiveSurra += "";
//   }
//   return ActiveSurra;
// }
