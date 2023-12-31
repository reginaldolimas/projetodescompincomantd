import React from 'react';
import { Card, Space, Badge, ConfigProvider } from 'antd';
import { Button } from '../Button/Button';
import { useAppContext } from '../../store/AppContext';
import { openModalSavePinAction } from '../../store/actions';
const { Meta } = Card;


export const CardAnd = ({ id, image, title, total }) => {
  const { state, dispatch } = useAppContext();

  const handleClick = () => {
    console.log('ola mundo');
    dispatch(openModalSavePinAction());
    console.log(state)
  };

  return(  
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
        <Button type="primary" label='Salvar' loading={false} loadingLabel='Salvando' onClick={handleClick}><span style={{ marginRight: '8px' }}>Salvar</span><Badge style={{ marginLeft: 'auto', marginRight: '8px' }} count={0} showZero></Badge></Button>
      </Space>
    </ConfigProvider>

  </Card>
  )
};