import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalState from './context/globalState';
import logo from './logo.svg';
import './App.css';
import './oneDesign.css'
import InputDemo from './containers/inputDemo';
import FormDemo from './containers/formDemo';
import AlertDemo from './containers/alertDemo';
import Header from './components/header';
import CheckboxDemo from './containers/checkboxDemo';
import StepForm from './containers/stepForm';
import BadgeForm from './containers/badgeForm';
import NotificationForm from './containers/notificationDemo';
import CascadeForm from './containers/cascadeDemo';



import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <GlobalState>
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route path="/" component={InputDemo} exact />
            <Route path="/form" component={FormDemo} exact />
            <Route path="/alert" component={AlertDemo} exact />
            <Route path="/checkbox" component={CheckboxDemo} exact />
            <Route path="/step" component={StepForm} exact />
            <Route path="/badge" component={BadgeForm} exact />
            <Route path="/toaster" component={NotificationForm} exact />
            <Route path="/cascade" component={CascadeForm} exact />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    );
  }
}

export default App;
