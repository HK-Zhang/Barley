import React, { Component } from 'react';

import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}


const PresetRangePicker = () => (<div>
    <RangePicker
        ranges={{
            Today: [moment(), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
        }}
        onChange={onChange}
    />
    <br />
    <RangePicker
        ranges={{
            Today: [moment(), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
        }}
        showTime
        format="YYYY/MM/DD HH:mm:ss"
        onChange={onChange}
    />
</div>);

export default PresetRangePicker;