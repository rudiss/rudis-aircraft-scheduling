import { Space, Typography } from 'antd';
import Card from 'antd/es/card/Card';
import React from 'react';

import { Container } from './styles';

const Rotation: React.FC = () => {
  return <Container>
    <Typography.Title level={2}>Rotation</Typography.Title>
    <Card>
      <Typography.Title level={4}>Flight: AS1001</Typography.Title>
      <Space  direction="horizontal">
      <Space>
        <Typography.Text>
          JFK
        </Typography.Text>
        <Typography.Text>
          2:00
        </Typography.Text>
      </Space>
      <div>{">"}</div>
      <Space>
        <Typography.Text>
          LDN
        </Typography.Text>
        <Typography.Text>
          10:34
          </Typography.Text></Space>
      </Space>
    </Card>
    <br/>
    <Card>
      <Typography.Title level={4}>Flight: AS1001</Typography.Title>
      <Space  direction="horizontal">
      <Space>
        <Typography.Text>
          JFK
        </Typography.Text>
        <Typography.Text>
          2:00
        </Typography.Text>
      </Space>
      <div>{">"}</div>
      <Space>
        <Typography.Text>
          LDN
        </Typography.Text>
        <Typography.Text>
          10:34
          </Typography.Text></Space>
      </Space>
    </Card>
  </Container>;
}

export default Rotation;