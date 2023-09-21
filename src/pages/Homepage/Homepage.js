import { Col, Row } from 'antd';
import { CardAnd } from "../../components/Card/Card";
import { Modal } from "../../components/Modal/Modal";
import { useAppContext } from '../../store/AppContext';

export const Homepage = () => {
    const { state } = useAppContext();

    return (
        <>
        <Modal open={state.mode === 'savePin'} />
        <Row gutter={16}>
            <Col className="gutter-row" offset={1} xs={24} sm={12} md={8} lg={6} xl={4}>
                <div><CardAnd title="Matemática" image="https://picsum.photos/200/300?53" /></div>
            </Col>
            <Col className="gutter-row" offset={1} xs={24} sm={12} md={8} lg={6} xl={4}>
                <div><CardAnd title="Português" image="https://picsum.photos/200/300?52" /></div>
            </Col>
            <Col className="gutter-row" offset={1} xs={24} sm={12} md={8} lg={6} xl={4}>
                <div><CardAnd title="JavaScript" image="https://picsum.photos/200/300?51" /></div>
            </Col>
        </Row>
        </>
    )
}