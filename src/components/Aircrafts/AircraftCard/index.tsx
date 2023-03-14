import { Progress, Space } from "antd";
import { AircraftCardContainer } from "./styles";
import { IAircraftCardProps } from "./types";

export const AircraftCard: React.FC<IAircraftCardProps> = ({
  data,
  active,
  utilization,
  ...rest
}) => (
  <AircraftCardContainer $active={active} {...rest}>
    <Space size="large">
      <Space direction="vertical">
        <span>Economy Seats: {data?.economySeats}</span>
        <span>Base: {data?.base}</span>
        <span>Type: {data?.type}</span>
      </Space>

      <Space direction="vertical">
        <span>Utilization:</span>
        <Progress
          size={40}
          type="circle"
          percent={utilization}
          strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
        />
      </Space>
    </Space>
  </AircraftCardContainer>
);
