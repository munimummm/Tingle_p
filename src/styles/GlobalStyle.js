import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;

}
ol,
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

`;
export default GlobalStyle;
