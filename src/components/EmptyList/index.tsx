import { InboxOutlined } from "@ant-design/icons";
import { EmptyListContainer } from "./styles";
import { Space, Typography } from "antd";

interface IEmptyListProps {
  text: string;
}
export const EmptyList: React.FC<IEmptyListProps> = ({ text }) => (
  <EmptyListContainer>
    <Space direction="vertical" size={20}>
      <InboxOutlined />
      <Typography.Text strong>{text}</Typography.Text>
    </Space>
  </EmptyListContainer>
);
