import React, { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Themes";
import axiosBaseConfig from "./services/helpers/axios-config";
import { useAircrafts } from "./services/apis/aircrafts/hooks";
import Aircrafts from "./components/Aircrafts";
import Rotation from "./components/Rotation";
import Flights from "./components/Flights";
import { IAircrafts } from "./components/Aircrafts/type";

axiosBaseConfig();

function App() {
  const { data: AircraftsData, isLoading } = useAircrafts();
  const [AircraftList, setAircraftList] = useState<IAircrafts[]>();

  useEffect(() => {
    if (!isLoading) {
      setAircraftList(AircraftsData);
    }
  }, [AircraftsData, isLoading])

  return (
    <ThemeProvider theme={Theme}>
      <div className="header">
        <h2>
          4 th January 2023
        </h2>
      </div>
      <div className="App">
        <Aircrafts data={AircraftList} />
        <Rotation />
        <Flights/>
      </div>
    </ThemeProvider>
  );
}

export default App;
