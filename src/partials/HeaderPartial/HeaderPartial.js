import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'DescomPin',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Home',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: 'Minhas Pastas',
    key: 'SubMenu',
    icon: <SettingOutlined />,
  },
];
export const HeaderPartial = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};