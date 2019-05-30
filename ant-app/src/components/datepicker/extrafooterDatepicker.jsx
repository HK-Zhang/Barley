import React, { Component } from 'react';
import { DatePicker } from 'antd';

const { RangePicker, MonthPicker } = DatePicker;

const ExtrafooterDatepicker = () => (
    <div>
        <DatePicker renderExtraFooter={() => 'extra footer'} /> <br /><br />
        <DatePicker renderExtraFooter={() => 'extra footer'} showTime /><br /><br />
        <RangePicker renderExtraFooter={() => 'extra footer'} /><br /><br />
        <RangePicker renderExtraFooter={() => 'extra footer'} showTime /><br /><br />
        <MonthPicker renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
    </div>
);

export default ExtrafooterDatepicker;