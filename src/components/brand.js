import React, {Component} from 'react'


export default class Brand extends Component {
    render() {
        return (
            <a href="/" className="navbar-brand">
                {this.props.logoMentimeterBlue ?
                    <img className="brand-image" alt="Brand" src="style/images/mentimeter_logo_blue.svg"/> :
                    <img className="brand-image" alt="Brand" src="style/images/mentimeter_logo_white.svg"/>}
            </a>
        );
    }
}
