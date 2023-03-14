import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Themes";
import axiosBaseConfig from "./services/helpers/axios-config";
import "./App.css";

import Aircrafts from "./components/Aircrafts";
import Rotation from "./components/Rotation";
import Flights from "./components/Flights";
import { createDatabase } from "./services/database";
import { StateMachineProvider } from "little-state-machine";

axiosBaseConfig();
createDatabase();
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="header">
        <h2>4 th January 2023</h2>
      </div>
      <div className="App">
        <StateMachineProvider>
          <Aircrafts />
          <Rotation />
          <Flights />
        </StateMachineProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
