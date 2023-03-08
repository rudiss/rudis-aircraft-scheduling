import { Card, Space, Typography } from 'antd';
import React from 'react';
import { useFlights } from '../../services/apis/flights';

import { Container } from './styles';
import { IFlight } from './types';

const Flights: React.FC = () => {
  const { data, isLoading } = useFlights();

  return (
    <Container>
    <Typography.Title level={2}>Flights</Typography.Title>
    {isLoading && <Space> lodiading flights...</Space>}
      {!isLoading &&
        data?.map((flight: IFlight) =>
          <Card>
            <Typography.Title level={4}>{flight.ident}</Typography.Title>
            <Space size={150}>
              <Space direction='vertical'>
                <Typography.Text>{flight.origin}</Typography.Text>
                <Typography.Text>{flight.readable_departure}</Typography.Text>
              </Space>
              <Space direction='vertical'>
                <Typography.Text>{flight.destination}</Typography.Text>
                <Typography.Text>{flight.arrivaltime}</Typography.Text>
              </Space>
            </Space>
          </Card>
        )}
  </Container>);
}

export default Flights;