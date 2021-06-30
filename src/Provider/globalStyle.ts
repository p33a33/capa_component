import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
      box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, sub, sup, tt, var,
  u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video , button, input,
  select, textarea {
    font-family: Noto Sans KR, sans-serif;
    word-break: break-all;
  }

  h1, h2, h3, h4, h5, h6, p, b, strong {
    word-break: keep-all;
  }
  a {
      color: inherit;
      text-decoration: none;
  }
  input,
  button {
      &:focus,
      &:active{ outline: none }
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  strong {
    font-weight: 500;
  }
  b {
    font-weight: bold;
  }
`;

export default GlobalStyle;
