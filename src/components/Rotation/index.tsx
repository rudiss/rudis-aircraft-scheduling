import { useCallback, useMemo } from "react";
import { useStateMachine } from "little-state-machine";
import { Space, Typography, Card } from "antd";

import { Timeline } from "../Timeline";
import { IFlight, useFlights } from "../../services/apis/flights";

import { addFlightRotation } from "./store";
import {
  Container,
  RotationContent,
  RotationLine,
  RotationTimeline,
} from "./styles";
import { SendOutlined, SyncOutlined } from "@ant-design/icons";
import { EmptyList } from "../EmptyList";

const Rotation: React.FC = () => {
  const { data: flights, isLoading } = useFlights();

  const {
    state: { schedule, selectedAircraft },
    actions,
  } = useStateMachine({ addFlightRotation });

  const handleAddFlight = (flight: IFlight) => (e: any) => {
    actions.addFlightRotation(flight);
  };

  const selectedFlights = useCallback(
    () => schedule.flights?.map(({ ident }) => ident) || [],
    [schedule.flights]
  );

  const getFlights = useMemo(() => {
    const unselectedFlights = flights?.filter(
      ({ ident }) => !selectedFlights().includes(ident)
    );

    const lastFlight = schedule.flights?.[schedule.flights?.length - 1];

    if (schedule.flights?.length)
      return unselectedFlights
        ?.filter(({ origin }) => lastFlight?.destination === origin)
        .filter(
          ({ departuretime }) =>
            (lastFlight?.arrivaltime || 0) + 1200 < departuretime
        );

    return unselectedFlights;
  }, [flights, schedule, selectedFlights]);

  return (
    <Container $hasAircraft={Boolean(selectedAircraft)}>
      <Typography.Title level={2}>Rotation</Typography.Title>
      <RotationContent>
        {getFlights?.map((flight) => (
          <Card
            key={flight.ident}
            title={<>Flight: {flight.ident}</>}
            extra={<SendOutlined size={24} />}
            onClick={handleAddFlight(flight)}
          >
            <Space direction="horizontal">
              <Space>
                <Typography.Text>{flight.origin}</Typography.Text>
                <Typography.Text strong>
                  {flight.readable_departure}
                </Typography.Text>
              </Space>
              <RotationLine />
              <Space>
                <Typography.Text strong>
                  {flight.readable_arrival}
                </Typography.Text>
                <Typography.Text>{flight.destination}</Typography.Text>
              </Space>
            </Space>
          </Card>
        ))}

        {getFlights?.length === 0 && (
          <EmptyList text="No flights rotation are available." />
        )}
      </RotationContent>

      {!isLoading && (
        <RotationTimeline>
          <Timeline />
        </RotationTimeline>
      )}
    </Container>
  );
};

export default Rotation;
