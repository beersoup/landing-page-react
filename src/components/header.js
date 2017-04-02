import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="header navbar navbar-fixed-top navbar-transparent">
                <div className="container">
                <a className="navbar-brand" href="#">
                    <img className="brand-image" alt="Brand" src="/style/images/mentimeter_logo_white.svg" />
                </a>
                <ul className="nav navbar-nav menu-list">
                    <li><a href="#" class="active">Why Mentimeter</a></li>
                    <li><a href="#">Inspiration</a></li>
                    <li><a href="#">Feature</a></li>
                    <li><a href="#">How-to</a></li>
                    <li><a href="#">Campaigns</a></li>
                    <li><button>Get Start</button></li>
                    <li><button>Log in</button></li>
                </ul>
                    </div>
            </div>

        );
    }
}
