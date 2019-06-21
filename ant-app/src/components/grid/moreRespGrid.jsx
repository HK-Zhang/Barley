import React from 'react';
import { Row, Col } from 'antd';

const MoreResponsiveGrid = () => (
    <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className="gutter-box">
            Col
    </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} className="gutter-box">
            Col
    </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className="gutter-box">
            Col
    </Col>
    </Row>
);

export default MoreResponsiveGrid;