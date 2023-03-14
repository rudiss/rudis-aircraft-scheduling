import { IAircraft } from "../apis/aircrafts";
import { IFlight } from "../apis/flights";

export interface ISchedules {
  aircraftId: string;
  flights: IFlight[];
}

export interface IDatabaseState {
  selectedAircraft: Partial<IAircraft> | undefined;
  schedule: Partial<ISchedules>;
  getAllSchedules: Partial<ISchedules[]>;
}
