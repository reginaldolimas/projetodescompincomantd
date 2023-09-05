import React from 'react';
import { Card, Button, Space, Badge, ConfigProvider } from 'antd';
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
            <Button type="primary" onClick={onClick}>Salvar<Badge count={0} showZero></Badge></Button>
         </Space>
         </ConfigProvider>

    </Card>
);