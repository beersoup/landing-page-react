import React, { Component } from 'react'


export default class Navigation extends Component {
    render() {
        return (
            <ul className="menu-list">
                <li><a href="why" className="menu-list-item active">Why Mentimeter</a></li>
                <li><a href="inspiration" className="menu-list-item">Inspiration</a></li>
                <li><a href="feature" className="menu-list-item">Feature</a></li>
                <li><a href="how-to" className="menu-list-item">How-to</a></li>
                <li><a href="campaigns" className="menu-list-item">Campaigns</a></li>
            </ul>
        );
    }
}