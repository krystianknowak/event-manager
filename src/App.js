import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import EventBuilder from './components/EventBuilder/EventBuilder';
import EventDetails from './components/EventDetails/EventDetails';
import Events from './components/Events/Events';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation />
          <div className="container">
            <Switch>
              <Route path="/eventbuilder" component={EventBuilder} />
              <Route path="/eventdetails/:id" component={EventDetails} />
              <Route path="/" component={Events} />
              <Redirect from="/" to="/events" />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
