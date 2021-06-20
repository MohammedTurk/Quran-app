import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import UserContext from "./Component/Context";
import ReaderElement from "./Component/Home/SectionHome/ReaderElement/ReaderElement";
import Aside from "./Component/Home/Aside/Aside";
import Favourite from "./Component/Favorite/Favourite";
import AudioPlayer from "./Component/AudioPlayer/AudioPlayer.jsx";
import Fort from "./Component/Fort/Fort";
import "./App.css";
import FortItem from "./Component/Fort/FortItem";
import TafseerHome from "./Component/Tafseer/TafseerHome";
import SurraTafseerData from "./Component/Tafseer/SurraTafseerData";

function App(props) {
  const TheContext = useContext(UserContext);
  const pathTafsserItem = `${TheContext.tafseerIndex}`;
  // const [Loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 8000);
  // }, []);
  return (
    <div>
      <Navbar />
      <Aside />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/favorite" component={Favourite} />
        <Route path="/ts" component={TafseerHome} />
        <Route path="/ft" component={Fort} />
        <Route path={`/reader:id`} component={ReaderElement} />
        <Route path="/fo/:id" component={FortItem} />
        <Route path={`/ts:id`} component={SurraTafseerData} />
      </Switch>

      {TheContext.surra === "" ? null : <AudioPlayer />}
    </div>
  );
}

export default App;
