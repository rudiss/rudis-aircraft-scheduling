import { Typography } from "antd";
import { Container } from "./styles";
import { IAircraft, useAircrafts } from "../../services/apis/aircrafts";
import { useStateMachine, GlobalState } from "little-state-machine";
import { removeAircraft, storeAircraft } from "./store";
import { AircraftCard } from "./AircraftCard";
import { useCallback } from "react";
import { toHoursAndMinutes } from "../Timeline";

const Aircrafts: React.FC = () => {
  const { data: aircrafts } = useAircrafts();
  const {
    state: { selectedAircraft, getAllSchedules },
    actions,
  } = useStateMachine({ storeAircraft, removeAircraft });

  const handleSelectAircraft =
    (aircraft: GlobalState["selectedAircraft"]) => (e: any) => {
      if (!selectedAircraft) {
        actions.storeAircraft(aircraft);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      actions.removeAircraft();
    };

  const handleActiveStatus = useCallback(
    (value: string) =>
      selectedAircraft?.ident === undefined
        ? true
        : selectedAircraft.ident === value,
    [selectedAircraft?.ident]
  );

  const handleAircraftUtilization = useCallback(
    (aircraft: IAircraft) => {
      const schedule = getAllSchedules.find(
        (item) => aircraft.ident === item?.aircraftId
      );

      const totalHours =
        schedule?.flights?.reduce((acc, { arrivaltime, departuretime }) => {
          return acc + (arrivaltime - departuretime);
        }, 0) || 0;

      return Math.floor(toHoursAndMinutes(totalHours).totalHoursPercent);
    },
    [getAllSchedules]
  );

  return (
    <Container>
      <Typography.Title level={2}>Aircrafts</Typography.Title>

      {aircrafts?.map((aircraft) => (
        <AircraftCard
          key={`${aircraft.base}-${aircraft.type}-${aircraft.ident}`}
          data={aircraft}
          title={aircraft.ident}
          utilization={handleAircraftUtilization(aircraft)}
          active={handleActiveStatus(aircraft.ident)}
          onClick={handleSelectAircraft(aircraft)}
        />
      ))}
    </Container>
  );
};

export default Aircrafts;
