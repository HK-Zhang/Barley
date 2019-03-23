import { Alert } from 'antd';
import React from 'react';
import styles from './alertDemo.module.scss';

const onClose = (e) => {
    console.log(e, 'I was closed.');
};


const BasicAlert = () => (
    <React.Fragment>
        <div className={styles.divframe}>
        <h2>Alert</h2>
            <ul>
                <li><Alert message="Success Text" type="success" /></li>
                <li><Alert message="Info Text" type="info" /></li>
                <li><Alert message="Warning Text" type="warning" /></li>
                <li><Alert message="Error Text" type="error" /></li>
            </ul>
        </div>
        <div className={styles.divframe}>
        <h2>Alert Close</h2>
            <ul><li><Alert
                message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                type="warning"
                closable
                onClose={onClose}
            /></li>
                <li><Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description Error Description Error Description"
                    type="error"
                    closable
                    onClose={onClose}
                /></li>
            </ul>
        </div>
    </React.Fragment>
    );


export default BasicAlert;