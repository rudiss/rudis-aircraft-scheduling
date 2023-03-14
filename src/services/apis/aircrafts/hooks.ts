import useSWR from "swr";
import fetcher from "../../helpers/fetcher";
import { IAircraft } from "./types";
import { EApiRoutes } from "../routes";

export const useAircrafts = () =>
  useSWR<IAircraft[]>(EApiRoutes.AIRCRAFTS, fetcher);

export const useAircraftsByIdent = (id: string) =>
  useSWR<IAircraft>(
    EApiRoutes.AIRCRAFTS_BY_IDENT.replace(":ident", id),
    fetcher
  );
