import React, { Component } from 'react'
import axios from '../../axios-events';
import Event from './Event/Event';
import './Events.css';

export default class Events extends Component {

  state = {
    events: []
  };

  componentDidMount() {
    axios.get().then(response => {
      this.setState({events: response.data});
    }).catch(error => {
      console.warn(error);
    });
  }

  showDetails = () => {

  }

  render() {
    return (
      <section className="events-section">
        <div className="block">
          <div className="columns is-multiline">
          {
            this.state.events.map(event => (
              <div className="column is-one-third" 
              key={event.id} >
                <Event 
                  event={event}/>
              </div>
            ))
          }  
          {
            this.state.events.map(event => (
              <div className="column is-one-third" 
              key={event.id} >
                <Event 
                  event={event}
                  showDetails={this.showDetails}/>
              </div>
            ))
          }        
          </div>
        </div>
      </section>
    )
  }
}
