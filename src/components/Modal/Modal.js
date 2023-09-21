import React from 'react';
import { Modal as ModalAntd } from 'antd';
import { useAppContext } from '../../store/AppContext';
import { closeModelAction } from '../../store/actions';

export const Modal = ({ title, children, open, controls = [], onHide}) => {
  const { dispatch } = useAppContext();

  const handleOk = () => {
    console.log('clicou');
  };

  const handleCancel = () => {
    console.log('cancelou');
    dispatch(closeModelAction());
  }
    return (
        <ModalAntd title={title} open={open} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ModalAntd>
  );
};