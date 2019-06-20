import React from 'react';
import { Row, Col } from 'antd';

const OffsetGrid = () => (<div>
    <Row>
        <Col span={8} className="gutter-box">col-8</Col>
        <Col span={8} offset={8} className="gutter-box"> 
            col-8
      </Col>
    </Row>
    <Row>
        <Col span={6} offset={6} className="gutter-box">
            col-6 col-offset-6
      </Col>
        <Col span={6} offset={6} className="gutter-box">
            col-6 col-offset-6
      </Col>
    </Row>
    <Row>
        <Col span={12} offset={6} className="gutter-box">
            col-12 col-offset-6
      </Col>
    </Row>
</div>);

export default OffsetGrid;