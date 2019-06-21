import React from 'react';
import { Row, Col } from 'antd';

const OrderGrid = () => (<div>
    <Row type="flex">
        <Col span={6} order={4} className="gutter-box">
            1 col-order-4
      </Col>
        <Col span={6} order={3} className="gutter-box">
            2 col-order-3
      </Col>
        <Col span={6} order={2} className="gutter-box">
            3 col-order-2
      </Col>
        <Col span={6} order={1} className="gutter-box">
            4 col-order-1
      </Col>
    </Row>
</div>);

export default OrderGrid;