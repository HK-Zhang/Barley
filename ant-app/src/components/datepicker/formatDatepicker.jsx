import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const FormatDatepicker = () => (
    <div>
        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} size="large" />
        <br />
        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} size="large" disabled />
        <br />
        <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} size="default" />
        <br />
        <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} size="small" />
        <br />
        <RangePicker
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat}
        />
    </div>
);

export default FormatDatepicker