import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Themes";
import { Button } from "./components/Button";
import axiosBaseConfig from "./services/helpers/axios-config";
import { useAircrafts } from "./services/apis/aircrafts/hooks";

axiosBaseConfig();

function App() {
  const { data } = useAircrafts();

  console.log(data);

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
