/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import bulmaCalendar from 'bulma-extensions/bulma-calendar/dist/js/bulma-calendar';
import axios from '../../axios-events';
import * as bulmaToast from "bulma-toast";
import './EventBuilder.css';

export default class EventBuilder extends Component {

  state = {
    event: {
      id: "",
      title: "",
      date: "",
      time: "",
      description: "",
      image: "",
      type: "",
      phoneNumber: "",
      email: "",
      eventPlace: {
        city: "",
        postalCode: "",
        street: "",
        buildingNumber: ""
      }
    },
    toastConfig: {
      position: "bottom-right",
      dismissible: true,
      duration: 6000,
      closeOnClick: true,
      pauseOnHover: true,
      animate: { in: 'fadeIn', out: 'fadeOut' }
    }
  };

  componentDidMount() {
    bulmaCalendar.attach('[type="date"]', {
      color: "primary",
      dateFormat: "YYYY-MM-DD",
      showFooter: false,
      showHeader: false
    });
  }

  createEvent = () => {
    axios.post('', this.state).then(response => {
      bulmaToast.toast({ message: "Congratulations! You have successfully created an event", type: "is-success", ...this.state.toastConfig });
    }).catch(error => {
      console.warn(error);
      bulmaToast.toast({ message: "Error! Something went wrong while you creating event", type: "is-danger", ...this.state.toastConfig });
    });
  }

  render() {
    return (
      <>
        <div className="columns">

          <div className="column">
            <div className="medium-spacing">
              <div>
                <div className="field">
                  <label className="label">Event title</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Event title" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Date</label>
                  <div className="control has-icons-left has-icons-right">
                    <input className="input" type="date" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time</label>
                  <div className="control has-icons-left" >
                    <input className="input" type="time" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-clock-o" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="Event description" defaultValue={""} />
                  </div>
                </div>
                <div className="file has-name">
                  <label className="file-label">
                    <input className="file-input" type="file" name="resume" />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fa fa-upload" />
                      </span>
                      <span className="file-label">
                        Choose a file…
                      </span>
                    </span>
                    <span className="file-name">
                      Screen Shot 2017-07-29 at 15.54.25.png
                    </span>
                  </label>
                </div>
                <div className="field">
                  <label className="label">Subject</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        <option value="">...</option>
                        <option value="Sport">Sport</option>
                        <option value="Culture">Culture</option>
                        <option value="Health">Health</option>
                      </select>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="field">
                  <label className="label">Phone number</label>
                  <div className="control has-icons-left" >
                    <input className="input" type="tel" placeholder="000000000" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-phone" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email Adress</label>
                  <div className="control has-icons-left" >
                    <input className="input" type="email" placeholder="email" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                </div>
                <hr />
                <div className="field">
                  <label className="label">City</label>
                  <div className="control" >
                    <input className="input" type="text" placeholder="city" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Street</label>
                  <div className="control" >
                    <input className="input" type="text" placeholder="street" />
                  </div>
                </div>

                <label className="label">Post code and building number</label>
                <div className="field is-grouped">
                  <div className="control has-icons-left" >
                    <input className="input" type="text" placeholder="00-00" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>

                  <div className="control has-icons-left" >
                    <input className="input" type="number" placeholder="0" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-building" />
                    </span>
                  </div>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-primary" onClick={this.createEvent}>Submit</button>
                  </div>
                  <div className="control">
                    <button className="button is-light">Clear</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column column-image">
            <div className="medium-spacing">
              <div className="image-background">
                <h1 className="title is-1 has-text-light ">Enjoy your time</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
