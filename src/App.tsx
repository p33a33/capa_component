import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Provider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
