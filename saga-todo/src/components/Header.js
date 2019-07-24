import React, {Component} from 'react'
import {connect} from 'react-redux'
class Header extends Component {

  render() {
    const {list} = this.props
    let count = 0
    list.map(item => count = !item.finished ? count + 1 : count)
    return (
      <div>
        <h1>我的代办清单</h1>
        <h3>{count ? `你有${count}个代办事项，赶快去处理` : `没有代办事项，快去添加吧`}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.getTodoList.list
  }
}

export default connect(mapStateToProps)(Header)