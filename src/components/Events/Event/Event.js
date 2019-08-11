/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { NavLink } from 'react-router-dom';


const Event = (props) => {
    return (
        <NavLink to={`eventdetails/${props.event.id}`}>
        <div className="card" onClick={props.showDetails}>
            <div className="card-image">
                <figure className="image is-2by1">
                    <img src="https://cdn.pixabay.com/photo/2015/07/10/17/53/cheers-839865_960_720.jpg" alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <h1 className="title is-3 is-uppercase">{props.event.title}</h1>
                    </div>
                </div>
                <div className="">
                    <time dateTime={props.event.date}>{props.event.date} - {props.event.time}</time>
                </div>
                <p>{props.event.eventPlace.city} - {props.event.eventPlace.street} {props.event.eventPlace.buildingNumber}, {props.event.eventPlace.postalCode}</p>
            </div>
        </div>
        </NavLink>
    )
}

export default Event;
