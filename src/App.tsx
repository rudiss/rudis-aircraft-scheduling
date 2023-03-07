import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Themes";
import { Button } from "./components/Button";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Button>Learn React</Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
