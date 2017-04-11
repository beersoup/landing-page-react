import React, {Component} from 'react'
import BannerImage from './banner-image'



export default class Banner extends Component {

    render() {

        let backgroundURL = `url("${this.props.backgroundUrl}")`
        const classMoveDevice = this.props.scrollTop250 ? "device-2 move" : "device-2"

        return (
            <div className="banner" style={{ backgroundImage : backgroundURL }}>
                <div className="banner-overlay" style={{ backgroundColor : this.props.overlayColor }}>
                    <div className="container">
                        <div className="banner-text-wrapper">
                            <span>{this.props.mainHeader}</span><br />
                            <h1>{this.props.secondHeader}</h1><br />
                            <p>{this.props.mainText}</p>
                            <BannerImage classMoveDevice={classMoveDevice}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
