import React, { Component } from 'react';
import styles from './timepickerDemo.module.scss';
import BasicTimepicker from '../components/timepicker/basicTimepicker';
import AddonTimepicker from '../components/timepicker/AddonTimepicker';


const TimepickerDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <BasicTimepicker></BasicTimepicker>
        </div>
        <div className={styles.divframe}>
            <h2>Addon</h2>
            <AddonTimepicker></AddonTimepicker>
        </div>
    </React.Fragment>
)

export default TimepickerDemo;