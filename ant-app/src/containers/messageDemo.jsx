import { message, Button } from 'antd';
import React, { Component } from 'react';
import styles from './messageDemo.module.scss';

const info = () => {
    message.info('This is a normal message');
};

const success = () => {
    message.success('This is a message of success');
};

const error = () => {
    message.error('This is a message of error');
};

const warning = () => {
    message.warning('This is message of warning');
};

const success10 = () => {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};

const successLoading = () => {
    const hide = message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
};

const successLoading2 = () => {
    message.loading('Action in progress..', 2.5)
        .then(() => message.success('Loading finished', 2.5))
        .then(() => message.info('Loading finished is finished', 2.5));
};

const MessageDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <Button type="primary" onClick={info}>Display normal message</Button>
        </div>
        <div className={styles.divframe}>
            <h2>Other types of message</h2>
            <div>
                <Button onClick={success}>Success</Button>
                <Button onClick={error}>Error</Button>
                <Button onClick={warning}>Warning</Button>
            </div>
        </div>
        <div className={styles.divframe}>
            <h2>Customize duration</h2>
            <Button onClick={success10}>Customized display duration</Button>
        </div>
        <div className={styles.divframe}>
            <h2>Message of loading</h2>
            <Button onClick={successLoading}>Display a loading indicator</Button>
        </div>
        <div className={styles.divframe}>
            <h2>Promise interface</h2>
            <Button onClick={successLoading2}>Display a sequence of message</Button>
        </div>
    </React.Fragment>
);


export default MessageDemo;