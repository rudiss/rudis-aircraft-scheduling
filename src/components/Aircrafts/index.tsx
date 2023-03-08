import React from 'react';
import { IAircrafts } from './type';
import { Card, Typography } from 'antd';
import { Container } from './styles';


type AircraftsPros = {
  data: IAircrafts[] | undefined;
}

const Aircrafts: React.FC<AircraftsPros> = ({ data }) => {
  return <Container>
    <Typography.Title level={2}>Aircrafts</Typography.Title>

    {data && data?.map((aircraft) =>
      <>
      <Card title={aircraft.ident}>
        <span>
          Economy Seats: {aircraft.economySeats}
        </span>
        <div>
          Type: {aircraft.type}<br/>
          Base: {aircraft.base}
        </div>
        </Card>
        <br/>
      </>
    )}
  </Container>
}

export default Aircrafts;