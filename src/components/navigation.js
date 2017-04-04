import React, { Component } from 'react'


export default class Navigation extends Component {
    render() {
        return (
            <ul className="menu-list">
                <li><a href="why" className={'active ' + this.props.classMenuLinkColor}>Why Mentimeter</a></li>
                <li><a href="inspiration" className={this.props.classMenuLinkColor}>Inspiration</a></li>
                <li><a href="feature" className={this.props.classMenuLinkColor}>Feature</a></li>
                <li><a href="how-to" className={this.props.classMenuLinkColor}>How-to</a></li>
                <li><a href="campaigns" className={this.props.classMenuLinkColor}>Campaigns</a></li>
            </ul>
        );
    }
}
