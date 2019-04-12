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
import TimelineFrom from './containers/timeline';
import MenuFrom from './containers/menuDemo';
import SwitchForm from './containers/switchDemo';
import TagDemo from './containers/tagDemo';
import TopDemo from './containers/topDemo';
import DividerForm from './containers/dividerDemo';
import AnchorForm from './containers/anchorDemo';
import TooltipForm from './containers/toolTipDemo';



import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <GlobalState>
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route path="/" component={InputDemo} exact />
            {/* <Route path="/:id" component={FormDemo} exact /> */}
            <Route path="/form" component={FormDemo} exact />
            <Route path="/alert" component={AlertDemo} exact />
            <Route path="/checkbox" component={CheckboxDemo} exact />
            <Route path="/step" component={StepForm} exact />
            <Route path="/badge" component={BadgeForm} exact />
            <Route path="/toaster" component={NotificationForm} exact />
            <Route path="/cascade" component={CascadeForm} exact />
            <Route path="/timeline" component={TimelineFrom} exact />
            <Route path="/menu" component={MenuFrom} exact />
            <Route path="/switch" component={SwitchForm} exact />
            <Route path="/tag" component={TagDemo} exact />
            <Route path="/top" component={TopDemo} exact />
            <Route path="/divider" component={DividerForm} exact />
            <Route path="/anchor" component={AnchorForm} exact />
            <Route path="/tooltip" component={TooltipForm} exact />            
          </Switch>
        </BrowserRouter>
      </GlobalState>
    );
  }
}

export default App;
