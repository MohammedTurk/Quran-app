import { createGlobalStyle } from "styled-components";

export const lightMode = {
  body: "#fff",
  fontColor: "#6c757d",
  backgroundReaders: " #ecf1f4",
  backgroungHeadSocial: " #00b06e",
  backgroundListRawayat: "#fbfbfb",
  backgroundSkeltonItems: "#d9d9d9",
  gradient: "linear-gradient(to left, #00b06e 50%, white 50%);",
  shimmerGradient:
    "linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #ffffff93 37%);",
};
export const darkMode = {
  body: "#1d1f27",
  fontColor: "#6c757d",
  backgroundReaders: "#00000029",
  backgroungHeadSocial: " #7c7c7c14",
  backgroundListRawayat: "#17181f",
  backgroundSkeltonItems: "#6969694f",
  gradient: "linear-gradient(to left, #00b06e 50%, #1d1f27 50%);",
  shimmerGradient:
    "linear-gradient(to right, #35363c 0%,  #e6e7eb54 20%, #e6e7eb54 20%, #ffffff38 40%, #35363c 100%);",
};

export const GlobalStyle = createGlobalStyle`

body,.skeleton-wrapper-readers,.nav-menu,nav ,#burger-menu-btn,.skeleton-wrapper-surras,.audio-div{
    background-color : ${(props) => props.theme.body}
    
}
body .navbar-light .navbar-nav .nav-link ,.navbar-light .navbar-brand {
    
    color:${(props) => props.theme.fontColor}
}

.container-options{
background-color : ${(props) => props.theme.backgroundListRawayat}

}
.info-reader,.container-options {
  color:${(props) => props.theme.fontColor}
}

.parent-div-reader,.readers-menu,.num-reader,.play-icon,.container-options::-webkit-scrollbar,.skeleton-tafseer-data,.surra-player,.fort-div,.skeleton-container-surra,.tafseer-div,.tafseer-element span,.tafseer-content::-webkit-scrollbar{
  
  background-color : ${(props) => props.theme.backgroundReaders}

}
#reader-item,.div-surra,.fort-element,.tafseer-element{
  margin-bottom:20px;
  background-color : ${(props) => props.theme.body}

}
.div-surra{
  margin-bottom:10px;

}

.head-area{
  background-color : ${(props) => props.theme.backgroungHeadSocial}

}
.container-options::-webkit-scrollbar-thumb{
  background-color : ${(props) => props.theme.fontColor}
}
.tool-input Input,.tool-input Input:focus,.value-selected,.value-selected:focus,.tafseer-content,.skeleton-wrapper-fort,.skeleton-wrapper-tafseer,.parent-div-reader input,.form-group .lll ,.search-fort input ,.search-fort input::placeholder,.tafseer-search input ,.tafseer-search input::placeholder {
  background-color : ${(props) => props.theme.body};
  color:${(props) => props.theme.fontColor}

}
.tool-input Input::placeholder,.fort-element,.tafseer-element a{
  color:${(props) => props.theme.fontColor}

}
.skeleton-icon ,.skeleton-head ,.skeleton-text,.skeleton-name,.skeleton-data  {
  background-color : ${(props) => props.theme.backgroundSkeltonItems}

}
.fort-element:hover{
  background : ${(props) => props.theme.gradient};
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .3s ease-out;
  color: #fff;
text-decoration:none;
}
.shimmer{
  background : ${(props) => props.theme.shimmerGradient}
}
  
`;
