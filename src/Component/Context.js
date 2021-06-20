import React, { Component, createContext } from "react";
import axios from "axios";
import { lightMode, darkMode, GlobalStyle } from "../Themes";
import styled, { ThemeProvider } from "styled-components";
const UserContext = createContext();
export default UserContext;

class ProvideContext extends Component {
  state = {
    allReaders: [],
    Theme: "light",
    surra: "",
    activeSurra: {},
    order: true,
    favArray: [],
    searchValue: "",
    mainReaders: null,
    selectedValue: "",
    rewayaReaders: [],
    fortItemText: {},
    fortText: {},
    fortAudio: "",
    tafseerSurra: {},
    tafseerIndex: "",
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://qurani-api.herokuapp.com/api/reciters?fbclid=IwAR3Wmq1Wy5qaCK_PthXPVz_H5VOZ6fObbS4czxh66j7y8RRalIV7MrHXeZk"
    );
    const TheData = data.map((item) => {
      item.inFav = false;
      return item;
    });
    this.setState({
      allReaders: TheData,
      mainReaders: TheData,
    });
  }

  lightTheme = () => {
    this.setState({
      Theme: "light",
    });
  };

  darkTheme = () => {
    this.setState({
      Theme: "dark",
    });
  };

  changeReader = (reader) => {
    this.setState({
      reader,
    });
  };

  playSurra = (surra) => {
    this.setState({
      surra: surra.url,
      activeSurra: surra,
    });
  };

  setOrder = (value) => {
    this.setState({
      order: value,
    });
  };

  addToFav = (item) => {
    item.inFav = !item.inFav;
    if (item.inFav === true) {
      this.setState({
        favArray: [...this.state.favArray, item],
      });
    } else {
      const newArr = this.state.favArray.filter((i) => i.id !== item.id);
      this.setState({
        favArray: newArr,
      });
    }
  };

  handleSearch = (e) => {
    this.setState(
      {
        searchValue: e.target.value,
      },
      () => this.searchReader()
    );
  };

  searchReader = () => {
    const Readers = this.state.allReaders;
    const mainReaders = Readers.filter((f) => {
      return f.name.indexOf(this.state.searchValue) !== -1;
    });
    if (mainReaders.length === 0) {
      this.setState({
        mainReaders: Readers,
      });
    } else {
      this.setState({
        mainReaders,
      });
    }
  };

  handleSelectedValue = (item) => {
    this.setState({
      selectedValue: item,
    });
    const Readers = this.state.allReaders;
    let mainReaders;
    if (item === "الكل") {
      mainReaders = this.state.allReaders;
    } else {
      mainReaders = Readers.filter((f) => {
        return f.rewaya === item;
      });
    }

    this.setState({
      mainReaders,
    });
  };

  setFortItem = (item) => {
    const audioFort = item.Audio_URL;
    this.setState({
      surra: audioFort,
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          lightTheme: this.lightTheme,
          darkTheme: this.darkTheme,
          readerInfo: this.readerInfo,
          changeReader: this.changeReader,
          playSurra: this.playSurra,
          setOrder: this.setOrder,
          addToFav: this.addToFav,
          handleSearch: this.handleSearch,
          handleSelectedValue: this.handleSelectedValue,
          setFortItem: this.setFortItem,
        }}
      >
        <ThemeProvider
          theme={this.state.Theme === "light" ? lightMode : darkMode}
        >
          <GlobalStyle />

          <StylePages>{this.props.children}</StylePages>
        </ThemeProvider>
        {/* {this.props.children} */}
      </UserContext.Provider>
    );
  }
}
const StylePages = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const ProvideConsumer = UserContext.Consumer;
export { ProvideContext, ProvideConsumer };
