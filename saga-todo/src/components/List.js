import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addItem, removeItem, toggleItem, modifyItem } from "../actions";

class List extends Component {
  toggleItem(index) {
    this.props.toggleItem(index);
  }

  modify(value, index) {
    this.props.modifyItem(value, index);
  }

  removeItem(index) {
    this.props.removeItem(index);
  }

  render() {
    const { list } = this.props;
    return (
      <span>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <input
                  style={{ width: 20, height: 20 }}
                  type="checkbox"
                  checked={item.finished}
                  onChange={() => this.toggleItem(index)}
                />
                <input
                  style={{ width: 200, height: 20 }}
                  defaultValue={item.title}
                  autoFocus={false}
                  onKeyDown={e => {
                    if (e.keyCode === 13) {
                      let title = e.target.value;
                      this.modify(title, index);
                    }
                  }}
                />
                <button onClick={() => this.removeItem(index)}>删除</button>
              </li>
            );
          })}
        </ul>
      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.getTodoList.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: bindActionCreators(addItem, dispatch),
    removeItem: bindActionCreators(removeItem, dispatch),
    toggleItem: bindActionCreators(toggleItem, dispatch),
    modifyItem: bindActionCreators(modifyItem, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
