import React, {Component} from 'react'


export default class GetStart extends Component {
    render() {
        return (
            <div className="get-start-link-wrapper">
                <a className={this.props.classGetStartBtn} href="#">Get started</a>
                <a className={this.props.classLoginBtn} href="#">Log in</a>
            </div>
        );
    }
}
