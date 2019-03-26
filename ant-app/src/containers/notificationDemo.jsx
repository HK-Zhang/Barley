import React, { Component } from 'react';
import { Button, notification } from 'antd';
import styles from './inputDemo.module.scss';

const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};

const openNotification2 = () => {
    const args = {
        message: 'Notification Title',
        description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 0,
    };
    notification.open(args);
};

const openNotificationWithIcon = (type) => {
    notification[type]({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

const close = () => {
    console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
};

const openNotification3 = () => {
    const key = `open${Date.now()}`;
    const btn = (
        <Button type="primary" size="small" onClick={() => notification.close(key)}>
            Confirm
      </Button>
    );
    notification.open({
        message: 'Notification Title',
        description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        btn,
        key,
        onClose: close,
    });
};

const openNotification4 = () => {
    notification.open({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        style: {
            width: 600,
            marginLeft: 335 - 600,
        },
    });
};

const key = 'updatable';

const openNotification5 = () => {
    notification.open({
        key,
        message: 'Notification Title',
        description: 'description.',
    });
    setTimeout(() => {
        notification.open({
            key,
            message: 'New Title',
            description: 'New description.',
        });
    }, 1000);
};


const NotificationForm = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <Button type="primary" onClick={openNotification}>Open the notification box</Button>
        </div>
        <div className={styles.divframe}>
            <h2>Duration after which the notification box is closed</h2>
            <Button type="primary" onClick={openNotification2}>Open the notification box</Button>
        </div>
        <div className={styles.divframe}>
            <h2>Notification with icon</h2>
            <div>
                <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
                <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
                <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
                <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
            </div>
        </div>
        <div className={styles.divframe}>
            <h2>Custom close button</h2>
            <Button type="primary" onClick={openNotification3}>
                Open the notification box</Button>
        </div>
        <div className={styles.divframe}>
            <h2>Customized style</h2>
            <Button type="primary" onClick={openNotification4}>Open the notification box</Button>
        </div>
        <div className={styles.divframe}>
            <h2>Update Message Content</h2>
            <Button type="primary" onClick={openNotification5}>Open the notification box</Button>
        </div>
    </React.Fragment>
);


export default NotificationForm;