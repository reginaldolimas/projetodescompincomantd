import React from 'react';
import { Card, Space, Badge, ConfigProvider } from 'antd';
import { Button } from '../Button/Button';

const { Meta } = Card;
export const CardAnd = ({ id, image, title, total, onClick }) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={image} />}
  >
    <ConfigProvider
      theme={{
        components: {
          Badge: {
            colorBorderBg: '#6C757D',
            colorError: '#6C757D',
            algorithm: true, // Enable algorithm
          }
        },
      }}
    >
      <Space className="card" align="center" style={{ display: "flex", justifyContent: "space-between" }}>
        <Meta title={title} description="" />
        <Button type="primary" label='Salvar' loading={false} loadingLabel='Salvando' onClick={onClick}><span style={{ marginRight: '8px' }}>Salvar</span><Badge style={{ marginLeft: 'auto', marginRight: '8px' }} count={0} showZero></Badge></Button>
      </Space>
    </ConfigProvider>

  </Card>
);