import React, {Component} from 'react'
import Header from './header'
import Banner from './banner'
import PageTwo from './page-two'


export default class App extends Component {

    constructor(props) {

        super(props)

        this.state = {
            isScrollNav: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {

        event.preventDefault()

        let scrollTop = event.target.body.scrollTop || event.target.documentElement.scrollTop

        scrollTop > 50 ? this.setState({isScrollNav: true}) : this.setState({isScrollNav: false})
    }

    render() {

        return (
            <div className="app" onScroll={this.handleScroll}>
                <Header handleScroll={this.handleScroll}
                        isScrollNav={this.state.isScrollNav}
                />
                <Banner />
                <PageTwo />
            </div>
        );
    }
}
