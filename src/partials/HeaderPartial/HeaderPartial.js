import React, { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from "react-router-dom"
const items = [
    {
        label: 'DescomPin',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: (
            <Link className='nav-link' to="/">Home</Link>
        ),
        key: 'home',
    },
    {
        label: (
            <Link className='nav-link' to="/minhas-pastas">Minhas Pastas</Link>
        ),
        key: 'pasta',
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