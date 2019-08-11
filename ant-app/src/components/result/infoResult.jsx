import React from 'react';
import { Result, Button } from 'antd';

const infoResult = () => (
    <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);

export default infoResult;