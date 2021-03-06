import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* @font-face {
  font-family: "Butler";
  font-weight: 500;
  src: url("./Font/Butler_Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Bluu Next";
  font-weight: 700;
  src: url("./Font/BluuNext-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "Mason Sans Bold";
  font-weight: 700;
  src: url("./Font/MasonSansBold.ttf") format("truetype");
}

@font-face {
  font-family: "Mason Sans Regular";
  font-weight: 500;
  src: url("./Font/MasonSansRegular.ttf") format("truetype");
}

@font-face {
  font-family: "Sofia Pro Light";
  font-weight: 700;
  src: url("./Font/SofiaPro_Light.ttf") format("truetype");
}

@font-face {
  font-family: "Sofia Pro Regular";
  font-weight: 500;
  src: url("./Font/Sofia_Pro_Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Sofia Pro Bold";
  font-weight: 700;
  src: url("./Font/Sofia_Pro_Bold.ttf") format("truetype");
} */

body,
#root {
  font-family: Butler, serif;
  width: 100%;
  height: 100vh;
  margin: 0;
  outline: none;

}
`;

export default GlobalStyle;
