import React, {Component} from 'react'
import Brand from './brand'
import Navigation from './navigation'
import GetStart from './get-start'


export default class Header extends Component {
    render() {
        return (
            <div className={'header navbar-fixed-top navbar-transparent ' + this.props.classBackgroundColor}>
                <div className="header-wrapper">
                    <Brand logoMentimeterBlue={this.props.logoMentimeterBlue}/>
                    <Navigation classMenuLinkColor={this.props.classMenuLinkColor}/>
                    <GetStart classLoginBtn={this.props.classLoginBtn} classGetStartBtn={this.props.classGetStartBtn}/>
                </div>
            </div>
        );
    }
}
