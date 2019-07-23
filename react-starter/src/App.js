import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";

import { AuthExample, BasicExample, ParamsExample } from "./router";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";

import store from "./store";

import NavBar from "./components/navbar";
import Counters from "./components/counters";

// controlled component demo
import '../node_modules/spectre.css/dist/spectre.min.css';
import './styles.css';
import FormContainer from './containers/FormContainer';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log('App - Constructor');
  }

  componentDidMount() {
    // Ajax call
    // this.setState
    console.log("App - mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log("Event handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      //React Router Demo
      // <Provider store={store}>
      //   <div className="App">
      //     <header className="App-header">
      //       <img src={logo} className="App-logo" alt="logo" />
      //       <h1 className="App-title">Welcome to React</h1>
      //     </header>
      //     <AuthExample />
      //   </div>
      // </Provider>

      //React Router Demo
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>

      //Demo
      // <React.Fragment>
      //   <NavBar totalCounters={this.state.counters.filter(c=> c.value>0).length}/>
      //   <main className="container">
      //     <Counters
      //       counters={this.state.counters}
      //       onReset={this.handleReset}
      //       onIncrement={this.handleIncrement}
      //       onDelete={this.handleDelete}
      //     />
      //   </main>
      // </React.Fragment>

      // controlled component demo
      // <div className="container">
      //   <div className="columns">
      //     <div className="col-md-9 centered">
      //       <h3>React.js Controlled Form Components</h3>
      //       <FormContainer />
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
