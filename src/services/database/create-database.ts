import { createStore } from "little-state-machine";

export default function createDatabase() {
  createStore(
    {
      selectedAircraft: undefined,
      schedule: {},
      getAllSchedules: [],
    },
    {
      name: "aircraft-scheduling-storage",
      storageType: localStorage,
    }
  );
}
