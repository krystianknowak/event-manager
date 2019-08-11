import React, { Component } from 'react';
import axios from '../../axios-events';

export default class EventDetails extends Component {

    state = {
        event: {}
    };

    componentDidMount() {
        axios.get(this.props.match.params.id).then(response => {
            this.setState({event: response.data});
        }).catch(error => {
            console.warn(error);
        });
    }

  render() {
    return (
      <div>
        <h1 className="title">{this.state.event.title}</h1>
      </div>
    )
  }
}
