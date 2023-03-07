import useSWR from "swr";
import fetcher from "../../helpers/fetcher";
import { IFlight } from "./types";
import { EApiRoutes } from "../routes";

export const useFlights = () => useSWR<IFlight[]>(EApiRoutes.FLIGHTS, fetcher);

export const useFlightsByIdent = (id: string) =>
  useSWR<IFlight>(EApiRoutes.FLIGHTS_BY_IDENT.replace(":ident", id), fetcher);
