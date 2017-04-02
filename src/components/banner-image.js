import React, { Component } from 'react';

export default class BannerImage extends Component {
    render() {
        return (
            <div className="banner-image">
                <div className="banner-image-wrapper container">
                    <img className="device-1" src="/style/images/macbook-transparent-bg.png" />
                    <img className="device-2" src="/style/images/phone-transparent-bg.png" />
                </div>
            </div>
        );
    }
}
