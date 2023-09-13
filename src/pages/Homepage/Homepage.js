import { Col, Row } from 'antd';
import { CardAnd } from "../../components/Card/Card";
import { Modal } from "../../components/Modal/Modal";

export const Homepage = () => {

    return (
        <>
        <Modal />
        <Row gutter={16}>
            <Col className="gutter-row" span={4}>
                <div><CardAnd onClick={()=>{console.log('clicou')}} col title="Matemática" image="https://picsum.photos/200/300?53" /></div>
            </Col>
            <Col className="gutter-row" span={4}>
                <div><CardAnd title="Português" image="https://picsum.photos/200/300?52" /></div>
            </Col>
            <Col className="gutter-row" span={4}>
                <div><CardAnd title="JavaScript" image="https://picsum.photos/200/300?51" /></div>
            </Col>
            <Col className="gutter-row" span={4}>
                <div><CardAnd title="Java" image="https://picsum.photos/200/300?55" /></div>
            </Col>
            <Col className="gutter-row" span={4}>
                <div><CardAnd title="Java" image="https://picsum.photos/200/300?56" /></div>
            </Col>
            <Col className="gutter-row" span={4}>
                <div><CardAnd title="Java" image="https://picsum.photos/200/300?57" /></div>
            </Col>
        </Row>
        </>
    )
}
