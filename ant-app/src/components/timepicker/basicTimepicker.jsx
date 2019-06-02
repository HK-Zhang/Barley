import React, { Component } from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}

const format = 'HH:mm';

class BasicTimepicker extends Component {
  state = {
    value: null,
  };

  onChange = time => {
    console.log(time);
    this.setState({ value: time });
  };

  render() {
    return (
      <div>
        <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
        <br />
        <TimePicker value={this.state.value} onChange={this.onChange} size="large" />
        <br />
        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled size="small" />
        <br />
        <TimePicker defaultValue={moment('12:08', format)} format={format} />
        <br />
        <TimePicker use12Hours onChange={onChange} />
        <br />
        <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
        <br />
        <TimePicker use12Hours format="h:mm a" onChange={onChange} />
      </div>
    )
  }
}

export default BasicTimepicker;