import React, { Component } from 'react'


export default class Brand extends Component {
    render() {
        return (
            <a href="/" className="navbar-brand">
                <img className="brand-image" alt="Brand" src="/style/images/mentimeter_logo_white.svg" />
            </a>
        );
    }
}
