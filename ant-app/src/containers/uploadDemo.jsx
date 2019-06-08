import React from 'react';
import styles from './uploadDemo.module.scss';
import DraggerUploader from '../components/upload/draggerUpload';
import BasicUpload from '../components/upload/basicUpload';
import Avatar from '../components/upload/avatarUpload';

const UploadDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Upload by Clicking</h2>
            <BasicUpload></BasicUpload>
        </div>
        <div className={styles.divframe}>
            <h2>Avatar</h2>
            <Avatar></Avatar>
        </div>
        <div className={styles.divframe}>
            <h2>Drag and Drop</h2>
            <DraggerUploader></DraggerUploader>
        </div>
    </React.Fragment>
)

export default UploadDemo;