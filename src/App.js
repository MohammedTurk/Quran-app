import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import UserContext from "./Component/Context";
import ReaderElement from "./Component/Home/SectionHome/ReaderElement/ReaderElement";
import Aside from "./Component/Home/Aside/Aside";
import FavoriteReaders from "./Component/Favorite/FavoriteReaders";
function App(props) {
  const TheContext = useContext(UserContext);
  const path = `/${TheContext.reader.id}`;
  return (
    <div>
      <Navbar />
      <Aside />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/favorite" component={FavoriteReaders} />
        <Route
          path={path}
          render={() => <ReaderElement item={TheContext.reader} />}
        />
      </Switch>
    </div>
  );
}

export default App;
