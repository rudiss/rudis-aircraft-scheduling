import { CardProps } from "antd";
import { GlobalState } from "little-state-machine";

export interface IAircraftCardProps extends CardProps {
  data: GlobalState["selectedAircraft"];
  active?: boolean;
  utilization: number;
}
