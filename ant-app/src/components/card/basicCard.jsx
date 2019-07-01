import React from 'react';
import { Card } from 'antd';

const BasicCard = () => (<div>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </Card>
    <br></br>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </Card>
</div>);

export default BasicCard;