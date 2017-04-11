import React, {Component} from 'react';

export default class BannerImage extends Component {
    render() {
        return (
            <div className="banner-image">
                <div className="banner-image-wrapper container">
                    <img className="device-1" src="style/images/COCKTAIL.svg"/>
                    <img className="device-3" src="style/images/CART.svg"/>
                    <img className={this.props.classMoveDevice} src="style/images/COMPASS.svg"/>
                </div>
            </div>
        );
    }
}
