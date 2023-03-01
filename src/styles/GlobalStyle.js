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
  color:#000

}
a:hover{
    color:#9147ff;
  }
span:hover{
    text-decoration: underline;
  }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

`;
export default GlobalStyle;
