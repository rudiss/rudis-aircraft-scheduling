import { GlobalState } from "little-state-machine";
import { ISchedules } from "../../services/database";

const getCurrentSchedules = (
  state: GlobalState,
  aircraftId?: string
): Partial<ISchedules> =>
  state.getAllSchedules.find(
    (schedule) => schedule?.aircraftId === aircraftId
  ) || {};

export const storeAircraft = (
  state: GlobalState,
  payload: GlobalState["selectedAircraft"]
): GlobalState => ({
  ...state,
  selectedAircraft: payload,
  schedule: getCurrentSchedules(state, payload?.ident),
});

export const removeAircraft = (state: GlobalState): GlobalState => ({
  ...state,
  selectedAircraft: undefined,
  schedule: {},
});
