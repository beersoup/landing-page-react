import React, { Component } from 'react';

export default class Banner extends Component {
    render() {

        let backgroundURL = `url("${this.props.backgroundUrl}")`;

        return (
            <div className="banner" style={{ backgroundImage : backgroundURL }}>
                <div className="container">
                    <div className="banner-text-wrapper">
                        <span>{this.props.mainHeader}</span><br />
                        <h1>{this.props.secondHeader}</h1><br />
                        <p>{this.props.mainText}</p>
                    </div>
                </div>
            </div>
        );
    }
}
