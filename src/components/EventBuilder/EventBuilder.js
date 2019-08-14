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
      title: "",
      date: "",
      time: "",
      description: "",
      image: "https://source.unsplash.com/random",
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
    },
    selectedFile: ""
  };

  componentDidMount() {
    bulmaCalendar.attach('[type="date"]', {
      color: "primary",
      dateFormat: "YYYY-MM-DD",
      showFooter: false,
      showHeader: false
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const elements = document.getElementById('eventBuilderForm').elements;

    for (let i=0; i<elements.length; i++) {
      if (elements[i].getAttribute("name") !== null) {
        this.validate(elements[i]);
      }
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.validate(e.target);
  }

  handleImage = e => {
    e.persist();
    this.setState({ selectedFile: e.target.files[0].name}, () => {
      this.handleChange(e);
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

  validate = element => {
    const name = element.getAttribute('name');
    let helperMsg = document.getElementById(element.dataset.target);

    const regexPhoneNumber = /(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPostCode = /[0-9]{2}-[0-9]{3}/;
    const regexTime = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;

    switch (name) {
      case "title":
        if (element.value.length < 5 || element.value.length > 30) {
          helperMsg.innerText = "Please input the value between 5 and 30 characters";
          element.classList.add('is-danger');
        } else {
          helperMsg.innerText = "";
          element.classList.remove('is-danger');
        }
        break;
      case "date":
        if (!element.value) {
          helperMsg.innerText = "Wrong date";
          element.classList.add('is-danger');
        } else {
          helperMsg.innerText = "";
          element.classList.remove('is-danger');
        }
        break;
      case "time":
        if (!regexTime.test(element.value)) {
          helperMsg.innerText = "Wrong time";
          element.classList.add('is-danger');
        } else {
          helperMsg.innerText = "";
          element.classList.remove('is-danger');
        }
        break;
      case "description":
        if (element.value.length < 20 || element.value.length > 100) {
          helperMsg.innerText = "Please input the value between 20 and 200 characters";
          element.classList.add('is-danger');
        } else {
          helperMsg.innerText = "";
          element.classList.remove('is-danger');
        }
        break;
      case "image":
        if (this.state.selectedFile === "") {
          helperMsg.innerText = "You have to upload some picture";
        } else {
          helperMsg.innerText = "";
        }
        break;
      case "type":
        if (element.value === "") {
          helperMsg.innerText = "Please select a value";
        } else {
          helperMsg.innerText = "";
        }
        break;
      case "phoneNumber":
        if (!regexPhoneNumber.test(element.value)) {
          helperMsg.innerText = "Wrong phone number";
          element.classList.add('is-danger');
        } else {
          helperMsg.innerText = "";
          element.classList.remove('is-danger');
        }
        break;
      case "email":
        if (!regexEmail.test(element.value)) {
          helperMsg.innerText = "Wrong email adress";
          element.classList.add('is-danger');
        } else {
          helperMsg.innerText = "";
          element.classList.remove('is-danger');
        }
        break;
      case "city":
        if (element.value.length < 3 || element.value.length > 30) {
          helperMsg.innerText = "Please input the value between 3 and 30 characters";
          element.classList.add('is-danger');
        } else {
          helperMsg.innerText = "";
          element.classList.remove('is-danger');
        }
        break;
      case "street":
        if (element.value.length < 3 || element.value.length > 30) {
          helperMsg.innerText = "Please input the value between 3 and 30 characters";
          element.classList.add('is-danger');
        } else {
          helperMsg.innerText = "";
          element.classList.remove('is-danger');
        }
        break;
      case "postalCode":
        if (!regexPostCode.test(element.value)) {
          helperMsg.innerText = "Wrong postal code adress";
          element.classList.add('is-danger');
        } else {
          helperMsg.innerText = "";
          element.classList.remove('is-danger');
        }
        break;
      case "buildingNumber":
        if (element.value > 9999 || element.value.length === 0) {
          helperMsg.innerText = "Value should not be greater than 9999";
          element.classList.add('is-danger');
        } else {
          helperMsg.innerText = "";
          element.classList.remove('is-danger');
        }
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <>
        <div className="columns">
          <div className="column">
            <div className="medium-spacing">
              <form id="eventBuilderForm" name="eventBuilderForm" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Event title</label>
                  <div className="control">
                    <input onChange={this.handleChange} className="input" name="title" type="text" placeholder="Event title" data-target="titleHelper" />
                  </div>
                  <p id="titleHelper" className="help is-danger"></p>
                </div>
                <div className="field">
                  <label className="label">Date</label>
                  <div className="control has-icons-left has-icons-right">
                    <input onChange={this.handleChange} className="input" type="date" name="date" data-target="dateHelper"/>
                  </div>
                  <p id="dateHelper" className="help is-danger"></p>
                </div>
                <div className="field">
                  <label className="label">Time</label>
                  <div className="control has-icons-left" >
                    <input onChange={this.handleChange} className="input" type="time" name="time" data-target="timeHelper" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-clock-o" />
                    </span>
                    <p id="timeHelper" className="help is-danger"></p>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea onChange={this.handleChange} name="description" className="textarea" placeholder="Event description" defaultValue={""} data-target="descriptionHelper" />
                  </div>
                  <p id="descriptionHelper" className="help is-danger"></p>
                </div>
                <label className="label">Image</label>
                <div className="file has-name">
                  <label className="file-label">
                    <input onChange={this.handleImage} className="file-input" type="file" name="image" data-target="imageHelper" />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fa fa-upload" />
                      </span>
                      <span className="file-label">
                        Choose a file…
                      </span>
                    </span>
                    <span className="file-name">
                      {this.state.selectedFile}
                    </span>
                  </label>
                </div>
                <p id="imageHelper" className="help is-danger"></p>
                <br />
                <div className="field">
                  <label className="label">Type</label>
                  <div className="control">
                    <div className="select">
                      <select onChange={this.handleChange} name="type" data-target="typeHelper">
                        <option value="">...</option>
                        <option value="Sport">Sport</option>
                        <option value="Culture">Culture</option>
                        <option value="Health">Health</option>
                      </select>
                    </div>
                  </div>
                  <p id="typeHelper" className="help is-danger"></p>
                </div>
                <hr />
                <div className="field">
                  <label className="label">Phone number</label>
                  <div className="control has-icons-left" >
                    <input onChange={this.handleChange} name="phoneNumber" className="input" type="tel" placeholder="000000000" maxLength="9" data-target="phoneHelper" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-phone" />
                    </span>
                  </div>
                  <p id="phoneHelper" className="help is-danger"></p>
                </div>
                <div className="field">
                  <label className="label">Email Adress</label>
                  <div className="control has-icons-left" >
                    <input onChange={this.handleChange} name="email" className="input" type="email" placeholder="email" data-target="emailHelper" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                  <p id="emailHelper" className="help is-danger"></p>
                </div>
                <hr />
                <div className="field">
                  <label className="label">City</label>
                  <div className="control" >
                    <input onChange={this.handleChange} name="city" className="input" type="text" placeholder="city" data-target="cityHelper" />
                  </div>
                  <p id="cityHelper" className="help is-danger"></p>
                </div>
                <div className="field">
                  <label className="label">Street</label>
                  <div className="control" >
                    <input onChange={this.handleChange} name="street" className="input" type="text" placeholder="street" data-target="streetHelper" />
                  </div>
                  <p id="streetHelper" className="help is-danger"></p>
                </div>

                <div className="field">
                  <label className="label">Post code</label>
                  <div className="control has-icons-left" >
                    <input onChange={this.handleChange} name="postalCode" className="input" type="text" maxLength="6" placeholder="00-00" data-target="postCodeHelper" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                  <p id="postCodeHelper" className="help is-danger"></p>
                </div>

                <div className="field">
                  <label className="label">Building number</label>
                  <div className="control has-icons-left" >
                    <input onChange={this.handleChange} name="buildingNumber" className="input" type="number" placeholder="0" data-target="buildingNumberHelper" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-building" />
                    </span>
                  </div>
                  <p id="buildingNumberHelper" className="help is-danger"></p>
                </div>


                <div className="field is-grouped">
                  <div className="control">
                    <button type="submit" className="button is-primary">Submit</button>
                  </div>
                  <div className="control">
                    <button type="reset" className="button is-light">Clear</button>
                  </div>
                </div>
              </form>
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
