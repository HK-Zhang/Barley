import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //     tags: []
  //   };

  //   constructor() {
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   styles = {
  //       frontWeight: "bold",
  //       fontSize: 50
  //   }

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   handleIncrement = product => {
  //     // console.log("Increment Cicked", this);
  //     console.log(product);
  //     this.setState({ value: this.state.value + 1 });
  //   };

  //   render() {
  //     return (
  //       <div>
  //         {this.state.tags.length === 0 && "Please create a new tag"}
  //         {this.renderTags()}
  //       </div>
  //     );
  //   }

  componentDidUpdate(prevProps, prevStates) {
    console.log("prevProps", prevProps);
    console.log("prevStates", prevStates);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call probably.
    }
  }

  componentWillUnmount(){
    console.log('Unmount');
  }

  render() {
    console.log("Counters - Rendered");
    // console.log("props", this.props);
    return (
      <React.Fragment>
        <div>
          {/* {this.props.children} */}
          <span className={this.getBadgeClasses()}>{this.fomatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
          {/* <ul>
            {this.state.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul> */}
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  fomatCount() {
    const { value } = this.props.counter;
    // return count === 0 ? <h1>Zero</h1> : count;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
