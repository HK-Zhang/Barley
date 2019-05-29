import React from 'react';
import styles from "./datepickerDemo.module.scss"
import BasicDatepicker from '../components/datepicker/basicDatepicker';
import FormatDatepicker from '../components/datepicker/formatDatepicker';
import Datetimepicker from '../components/datepicker/Datetimepicker';
import DisableDatepicker from '../components/datepicker/disabledDatepicker';
import RangeDatepicker from '../components/datepicker/rangeDatepicker';
import PresetRangePicker from '../components/datepicker/presetrangeDatepicker';

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
        <div className={styles.divframe}>
            <h2>Disabled Date & Time</h2>
            <DisableDatepicker></DisableDatepicker>
        </div>
        <div className={styles.divframe}>
            <h2>Customized Range Picker</h2>
            <RangeDatepicker></RangeDatepicker>
        </div>
        <div className={styles.divframe}>
            <h2>Presetted Ranges</h2>
            <PresetRangePicker></PresetRangePicker>
        </div>
    </React.Fragment>
)

export default DatepickerDemo;