import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import EventBuilder from './components/EventBuilder/EventBuilder';
import Events from './components/Events/Events';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/eventbuilder" component={EventBuilder} />
            <Route path="/" component={Events} />
            <Redirect from="/" to="/events" />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
