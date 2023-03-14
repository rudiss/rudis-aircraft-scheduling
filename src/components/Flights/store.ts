import { ISchedules } from "./../../services/database/types";
import { IFlight } from "./../../services/apis/flights/types";
import { GlobalState } from "little-state-machine";

const formatSchedule = (
  state: GlobalState,
  flightId: string
): Partial<ISchedules[]> => {
  const currentFlights = state.getAllSchedules.find(
    (schedule) => schedule?.aircraftId === state.selectedAircraft?.ident
  )?.flights;

  const removedFlightPosition =
    currentFlights?.findIndex(({ ident }) => ident === flightId) || 0;

  const filteredFlights = currentFlights?.filter(
    (_, position) => removedFlightPosition > position
  );

  const filterSchedules = state.getAllSchedules.filter(
    (schedule) => schedule?.aircraftId !== state.selectedAircraft?.ident
  );

  if (state.selectedAircraft?.ident)
    return [
      ...filterSchedules,
      {
        aircraftId: state.selectedAircraft.ident,
        flights: filteredFlights || [],
      },
    ];

  return [];
};

const getCurrentSchedules = (
  state: GlobalState,
  flight: IFlight
): Partial<ISchedules> => {
  const currentFlights = state.getAllSchedules.find(
    (schedule) => schedule?.aircraftId === state.selectedAircraft?.ident
  )?.flights;

  const removedFlightPosition =
    currentFlights?.findIndex(({ ident }) => ident === flight.ident) || 0;

  const filteredFlights = currentFlights?.filter(
    (_, position) => removedFlightPosition > position
  );

  return {
    aircraftId: state.selectedAircraft?.ident,
    flights: filteredFlights || [],
  };
};

export const removeFlight = (
  state: GlobalState,
  payload: IFlight
): GlobalState => ({
  ...state,
  schedule: getCurrentSchedules(state, payload),
  getAllSchedules: [...formatSchedule(state, payload.ident)],
});
