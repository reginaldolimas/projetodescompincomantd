import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
export const CardAnd = ({ id, image, title, total, onClick}) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={image} />}
  >
    <Meta title={title} description="" />
  </Card>
);