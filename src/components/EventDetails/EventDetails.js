/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from '../../axios-events';
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
              <br />
              <h1 className="subtitle is-5">by {this.state.event.email}</h1>
              <button href="" className="button is-primary is-large is-outlined is-fullwidth">Register</button>
              <div>
                <span>{this.state.event.type}</span>
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
