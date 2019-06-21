import React from 'react';
import { Row, Col } from 'antd';

const ResponsiveGrid = () => (<Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10} className="gutter-box">
        Col
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4} className="gutter-box">
        Col
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10} className="gutter-box">
        Col
    </Col>
</Row>);

export default ResponsiveGrid;