import { createGlobalStyle } from "styled-components";

export const lightMode = {
  body: "#fff",
  fontColor: "#6c757d",
  backgroundReaders: " #ecf1f4",
  backgroungHeadSocial: " #00b06e",
};
export const darkMode = {
  body: "#1d1f27",
  fontColor: "#6c757d",
  backgroundReaders: " #00000029",
  backgroungHeadSocial: " #7c7c7c14",
};

export const GlobalStyle = createGlobalStyle`

body{
    background-color : ${(props) => props.theme.body}
    
}
body .navbar-light .navbar-nav .nav-link ,.navbar-light .navbar-brand {
    
    color:${(props) => props.theme.fontColor}
}
.nav-menu{
background-color : ${(props) => props.theme.body}

}
.info-reader {
  color:${(props) => props.theme.fontColor}
}

.readers-menu ,
.fav-div,.num-reader,.play-icon{
  
  background-color : ${(props) => props.theme.backgroundReaders}

}
#reader-item,.div-surra{
  margin-bottom:20px;
  background-color : ${(props) => props.theme.body}

}
.div-surra{
  margin-bottom:10px;

}
nav ,#burger-menu-btn{
  background-color : ${(props) => props.theme.body}
}
// .play-icon{
//   background-color : ${(props) => props.theme.backgroundReaders}

// }
.head-area{
  background-color : ${(props) => props.theme.backgroungHeadSocial}

}
`;
