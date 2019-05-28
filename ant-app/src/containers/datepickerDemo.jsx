import React from 'react';
import styles from "./datepickerDemo.module.scss"
import BasicDatepicker from '../components/datepicker/basicDatepicker';
import FormatDatepicker from '../components/datepicker/formatDatepicker';
import Datetimepicker from '../components/datepicker/Datetimepicker';

const DatepickerDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <BasicDatepicker></BasicDatepicker>
        </div>
        <div className={styles.divframe}>
            <h2>Format</h2>
            <FormatDatepicker></FormatDatepicker>
        </div>
        <div className={styles.divframe}>
            <h2>Choose Time</h2>
            <Datetimepicker></Datetimepicker>
        </div>
    </React.Fragment>
)

export default DatepickerDemo;