/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from '../../axios-events';
import * as bulmaToast from "bulma-toast";
import './EventDetails.css';

export default class EventDetails extends Component {

  state = {
    event: {},
    eventPlace: {}
  };

  componentDidMount() {
    axios.get(this.props.match.params.id).then(response => {
      this.setState({ event: response.data, eventPlace: response.data.eventPlace });
    }).catch(error => {
      console.warn(error);
    });
  }

  showNotifcation = () => {
    bulmaToast.toast({
      message: "Congratulations! You have successfully registered for the event",
      type: "is-success",
      position: "bottom-right",
      dismissible: true,
      duration: 6000,
      closeOnClick: true,
      pauseOnHover: true,
      animate: { in: 'fadeIn', out: 'fadeOut' }
    });
  }

  render() {
    return (
      <div className="block">
        <div className="box">
          <div className="columns">
            <div className="column is-two-thirds">
              <figure className="image is-2by1">
                <img className="img-radius" src={this.state.event.image} />
              </figure>
            </div>
            <div className="column ">
              <h1 className="title is-uppercase is-4">{this.state.event.title}</h1>
              <p className="subtitle is-6">Event type: {this.state.event.type}</p>

              <br />
              <h1 className="subtitle is-5">by {this.state.event.email}</h1>
              <button onClick={this.showNotifcation} className="button is-primary is-large is-outlined is-fullwidth">Register</button>
              <div>
              </div>
            </div>
          </div>
          <hr />
          <div className="columns">
            <div className="column is-two-thirds">
              <h1 className="title is-6">Description</h1>
              <p>
                {this.state.event.description}
              </p>
            </div>
            <div className="column">
              <h1 className="title is-6">Date And Time</h1>
              <p>
                {this.state.event.date} - {this.state.event.time}
              </p>
              <br />
              <h1 className="title is-6">Location</h1>
              <p>
                {this.state.eventPlace.city} - {this.state.eventPlace.street} {this.state.eventPlace.buildingNumber}, {this.state.eventPlace.postalCode}
              </p>
              <br />
              <h1 className="title is-6">Contact</h1>
              <p>
                Email: {this.state.event.email} <br />
                Phone number: {this.state.event.phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
