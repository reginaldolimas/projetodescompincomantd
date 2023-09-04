import { CardAnd } from "./components/Card/Card";
import { HeaderPartial } from "./partials/HeaderPartial/HeaderPartial";
import { Col, Row } from 'antd';

function App() {

  const handleClick = () => {
         console.log('clicou');
  };

  return (
    <div className="App">
      <HeaderPartial />
      <br></br>

      <Row gutter={16}>
      <Col className="gutter-row" span={4}>
        <div><CardAnd onClick={handleClick} col title="Matemática" image="https://picsum.photos/200/300?53" /></div>
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

    </div>
  );
}

export default App;
