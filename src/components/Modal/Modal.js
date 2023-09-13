import React from 'react';
import { Modal as ModalAntd } from 'antd';
export const Modal = ({ title, children, open, controls = [], onHide}) => {
  const handleOk = () => {
    console.log('clicou');
  };

  const handleCancel = () => {
    console.log('cancelou');
  }
    return (
        <ModalAntd title={title} open={open} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ModalAntd>
  );
};