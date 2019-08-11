import React from 'react';
import styles from './resultDemo.module.scss';
import SuccessResult from '../components/result/successResult';
import Inforesult from '../components/result/infoResult';
import WarningResult from '../components/result/warningResult';
import FofResult from '../components/result/fofResult';
import FotResult from '../components/result/fotResult';
import FooResult from '../components/result/fooResult';
import SubmissionResult from '../components/result/submissionResult';
import CustomResult from '../components/result/customResult';






const ResultDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Success</h2>
            <SuccessResult />
        </div>
        <div className={styles.divframe}>
            <h2>Info</h2>
            <Inforesult />
        </div>
        <div className={styles.divframe}>
            <h2>Warning</h2>
            <WarningResult />
        </div>
        <div className={styles.divframe}>
            <h2>404</h2>
            <FofResult />
        </div>
        <div className={styles.divframe}>
            <h2>403</h2>
            <FotResult />
        </div>
        <div className={styles.divframe}>
            <h2>500</h2>
            <FooResult />
        </div>
        <div className={styles.divframe}>
            <h2>Submission</h2>
            <SubmissionResult />
        </div>
        <div className={styles.divframe}>
            <h2>Custome Icon</h2>
            <CustomResult />
        </div>
    </React.Fragment>
);

export default ResultDemo;