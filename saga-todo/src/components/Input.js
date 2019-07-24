import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addItem } from "../actions";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  addTodo(value) {
    this.props.addItem(value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
        <input
          style={{ borderWidth: 1, borderColor: "red" }}
          placeholder="请输入代办事项"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              let title = e.target.value;
              if(title.length > 0)
              this.addTodo(title)
            }
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: ""
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: bindActionCreators(addItem, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
