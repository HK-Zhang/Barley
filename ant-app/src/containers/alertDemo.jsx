import { Alert } from 'antd';
import React from 'react';

const onClose = (e) => {
    console.log(e, 'I was closed.');
};


const BasicAlert = () => (
    <div>
        <Alert message="Success Text" type="success" />
        <Alert message="Info Text" type="info" />
        <Alert message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
        <Alert
            message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
            type="warning"
            closable
            onClose={onClose}
        />
        <Alert
            message="Error Text"
            description="Error Description Error Description Error Description Error Description Error Description Error Description"
            type="error"
            closable
            onClose={onClose}
        />
    </div>
    );


export default BasicAlert;