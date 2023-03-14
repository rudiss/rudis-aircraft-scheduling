import { ISchedules } from "./../../services/database/types";
import { IFlight } from "./../../services/apis/flights/types";
import { GlobalState } from "little-state-machine";

const formatSchedule = (
  state: GlobalState,
  flight: IFlight
): Partial<ISchedules[]> => {
  const currentFlights = state.getAllSchedules
    .find((schedule) => schedule?.aircraftId === state.selectedAircraft?.ident)
    ?.flights.filter(({ ident }) => ident !== flight.ident);

  const filterSchedules = state.getAllSchedules.filter(
    (schedule) => schedule?.aircraftId !== state.selectedAircraft?.ident
  );
  if (state.selectedAircraft?.ident)
    return [
      ...filterSchedules,
      {
        aircraftId: state.selectedAircraft.ident,
        flights: [...(currentFlights || []), flight],
      },
    ];

  return state.getAllSchedules;
};

const getCurrentSchedules = (
  state: GlobalState,
  flight: IFlight
): Partial<ISchedules> => {
  const currentFlights = state.getAllSchedules
    .find((schedule) => schedule?.aircraftId === state.selectedAircraft?.ident)
    ?.flights.filter(({ ident }) => ident !== flight.ident);

  if (state.selectedAircraft?.ident)
    return {
      aircraftId: state.selectedAircraft?.ident,
      flights: [...(currentFlights || []), flight],
    };

  return {};
};

export const addFlightRotation = (
  state: GlobalState,
  payload: IFlight
): GlobalState => ({
  ...state,
  schedule: getCurrentSchedules(state, payload),
  getAllSchedules: [...formatSchedule(state, payload)],
});
