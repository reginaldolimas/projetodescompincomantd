import React from 'react';
import { Card, Button, Space } from 'antd';
const { Meta } = Card;
export const CardAnd = ({ id, image, title, total, onClick }) => (
    <Card
        hoverable
        style={{
            width: 240,
        }}
        cover={<img alt="example" src={image} />}
    >
        <Space align="center" style={{display: "flex", justifyContent: "space-between"}}>
            <Meta title={title} description="" />
            <Button type="primary">Salvar</Button>
        </Space>

    </Card>
);