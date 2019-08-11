/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {

    toggleMenu = () => {
        const burgerTarget = document.querySelector(".burger");
        const navbarElements = document.getElementById("navbarElements");
        burgerTarget.classList.toggle('is-active');
        navbarElements.classList.toggle('is-active');
    }

    render() {
        return (
            <>
                <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <NavLink to={"/"} className="navbar-item is-primary" href="#">
                                <h1 className="title is-4 has-text-white">Event Manager</h1>
                            </NavLink>
                            <a role="button" onClick={this.toggleMenu} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarElements">
                                <span aria-hidden="true" />
                                <span aria-hidden="true" />
                                <span aria-hidden="true" />
                            </a>
                        </div>
                        <div id="navbarElements" className="navbar-menu">
                            <div className="navbar-end">
                            <NavLink className="navbar-item" to={"/"} onClick={this.toggleMenu}>
                                    Events
                            </NavLink>
                                <NavLink className="navbar-item" to={"eventbuilder"} onClick={this.toggleMenu}>
                                    Add Event
                            </NavLink>
                            </div>

                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
