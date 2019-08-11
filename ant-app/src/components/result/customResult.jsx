import React from 'react';
import { Result, Icon, Button } from 'antd';

const CustomeResult = () => (
    <Result
        icon={<Icon type="smile" theme="twoTone" />}
        title="Great, we have done all the operations!"
        extra={<Button type="primary">Next</Button>}
    />
);

export default CustomeResult;