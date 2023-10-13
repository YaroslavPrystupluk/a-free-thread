import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
	font-family: "Kyiv";
	src: url("/fonts/KyivRegion-Regular.woff2") format("woff2");
	font-weight: normal;
	font-style: normal;
  }
  @font-face {
	font-family: "Geneva";
	src: url("/fonts/Geneva Regular.ttf") format("ttf");
	font-weight: normal;
	font-style: normal;
  }
  @font-face {
	font-family: "Philosopher";
	src: url("/fonts/Philosopher-Regular.ttf") format("ttf");
	font-weight: normal;
	font-style: normal;
  }

  * {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
  }
`;

export default GlobalStyle;
