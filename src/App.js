import React from "react";
import SuggestionBox from "./SuggestionBox";
import './App.css'
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <SuggestionBox />
      </div>
    </ThemeProvider>
  );
}

export default App;
