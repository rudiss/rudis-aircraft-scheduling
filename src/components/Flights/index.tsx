import { useMemo } from "react";
import { useStateMachine } from "little-state-machine";
import { Button, Card, Space, Typography } from "antd";

import { Container, FlightLine } from "./styles";
import { removeFlight } from "./store";
import { IFlight } from "../../services/apis/flights";
import { CloseOutlined } from "@ant-design/icons";
import { EmptyList } from "../EmptyList";

const Flights: React.FC = () => {
  const {
    state: { schedule },
    actions,
  } = useStateMachine({ removeFlight });

  const handleRemoveFlight = (flight: IFlight) => (e: any) => {
    actions.removeFlight(flight);
  };

  const getOrderedFlights = useMemo(
    () => schedule.flights?.sort((a, b) => a.arrivaltime - b.arrivaltime),
    [schedule.flights]
  );

  return (
    <Container>
      <Typography.Title level={2}>Flights</Typography.Title>
      {getOrderedFlights?.map((flight) => (
        <Card
          key={`${flight.ident}-${flight.origin}`}
          title={flight.ident}
          extra={
            <Button
              type="text"
              shape="circle"
              icon={<CloseOutlined />}
              onClick={handleRemoveFlight(flight)}
            />
          }
        >
          <Space size={50}>
            <Space direction="vertical" size={2}>
              <Typography.Text strong>
                {flight.readable_departure}
              </Typography.Text>
              <Typography.Text>{flight.origin}</Typography.Text>
            </Space>
            <FlightLine />
            <Space direction="vertical" size={2}>
              <Typography.Text strong>
                {flight.readable_arrival}
              </Typography.Text>
              <Typography.Text>{flight.destination}</Typography.Text>
            </Space>
          </Space>
        </Card>
      ))}

      {getOrderedFlights?.length === 0 && (
        <EmptyList text="No flights have been added yet." />
      )}
    </Container>
  );
};

export default Flights;
