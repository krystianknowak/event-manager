/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Navigation.css';

export default class Navigation extends Component {

    showMenu = (e) => {
        const burgerTarget = e.target.dataset.target;
        const navbarElements = document.getElementById(burgerTarget);
        e.target.classList.toggle('is-active');
        navbarElements.classList.toggle('is-active');
    }

    render() {
        return (
            <>
                <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item is-primary brand-logo" href="#">
                            <h1>Event Manager</h1>
                        </a>
                        <a role="button" onClick={this.showMenu} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarElements">
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                        </a>
                    </div>
                    <div id="navbarElements" className="navbar-menu">
                        <div className="navbar-end">
                            <a className="navbar-item">
                                Home
                            </a>
                            <a className="navbar-item">
                                Documentation
                            </a>
                        </div>

                    </div>
                </nav>
            </>
        )
    }
}
