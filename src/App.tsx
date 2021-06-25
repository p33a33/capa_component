import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from "./Provider";
import GlobalStyle from "./Provider/globalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App"></div>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;
