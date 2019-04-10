import React, { Component } from 'react';
import {
    Tag
} from 'antd'

const { CheckableTag } = Tag;

class MyTag extends Component {
  state = { checked: true };

  handleChange = (checked) => {
    this.setState({ checked });
  }

  render() {
    return <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />;
  }
}

export default MyTag;
