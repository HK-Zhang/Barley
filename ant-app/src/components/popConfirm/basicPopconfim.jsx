import React, { Component } from 'react';
import { Popconfirm, message,Icon  } from 'antd';

function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
}

function cancel(e) {
    console.log(e);
    message.error('Click on No');
}

const BasicPopconfirm = () => (<Popconfirm
    title="Are you sure delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
    icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
>
    <a href="#">Delete</a>
</Popconfirm>);

export default BasicPopconfirm;