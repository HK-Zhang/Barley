import React from 'react';
import { Modal, Button } from 'antd';
import styles from './modalDemo.module.scss';
import BasicModal from '../components/basicModalForm';
import AsyncModal from '../components/asyncModalForm';
import FooterModal from '../components/footerModalForm';
import CofirmModal from '../components/cofirmModalForm';
import LocalizedModal from '../components/LocalizedModal';
import PositionModal from '../components/positionModal';
import CustomizedModal from '../components/customizedModalForm';

const confirm = Modal.confirm;

function showConfirm() {
    confirm({
        title: 'Do you want to delete these items?',
        content: 'When clicked the OK button, this dialog will be closed after 1 second',
        onOk() {
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
        },
        onCancel() { },
    });
}

function destroyAll() {
    Modal.destroyAll();
  }

function info() {
    Modal.info({
        title: 'This is a notification message',
        content: (
            <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
            </div>
        ),
        onOk() { },
    });
}

function success() {
    Modal.success({
        title: 'This is a success message',
        content: 'some messages...some messages...',
    });
}

function error() {
    Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
    });
}

function warning() {
    Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
    });
}

function countDown() {
    let secondsToGo = 5;
    const modal = Modal.success({
        title: 'This is a notification message',
        content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
    const timer = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
            content: `This modal will be destroyed after ${secondsToGo} second.`,
        });
    }, 1000);
    setTimeout(() => {
        clearInterval(timer);
        modal.destroy();
    }, secondsToGo * 1000);
}

const ModalDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <BasicModal />
        </div>
        <div className={styles.divframe}>
            <h2>Asynchronously close</h2>
            <AsyncModal />
        </div>
        <div className={styles.divframe}>
            <h2>Customized Footer</h2>
            <FooterModal />
        </div>
        <div className={styles.divframe}>
            <h2>Confirmation modal dialog</h2>
            <CofirmModal />
        </div>
        <div className={styles.divframe}>
            <h2>Confirmation modal dialog</h2>
            <Button onClick={showConfirm}>
                Confirm
                </Button>
        </div>
        <div className={styles.divframe}>
            <h2>Information modal dialog</h2>
            <div>
                <Button onClick={info}>Info</Button>
                <Button onClick={success}>Success</Button>
                <Button onClick={error}>Error</Button>
                <Button onClick={warning}>Warning</Button>
            </div>
        </div>
        <div className={styles.divframe}>
            <h2>Internationalization</h2>
            <LocalizedModal />
        </div>
        <div className={styles.divframe}>
            <h2>Manual to update destroy</h2>
            <Button onClick={countDown}>Open modal to close in 5s</Button>
        </div>
        <div className={styles.divframe}>
            <h2>To customize the position of modal</h2>
            <PositionModal />
        </div>
        <div className={styles.divframe}>
            <h2>Customize footer buttons props</h2>
            <CustomizedModal />
        </div>
    </React.Fragment>
);


export default ModalDemo;