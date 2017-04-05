import React, {Component} from 'react'
import Header from './header'
import Banner from './banner'
import BannerImage from './banner-image'

const content = {
    mainHeader: "WHY MENTIMETER?",
    secondHeader: "Create fun and interactive presentations",
    mainText: "Mentimeter is an easy to use presentation software used by more than 5 million people. With Mentimeter you can create fun and interactive presentations. We help you make your events, presentations, lectures and workshops innovatice and memorable."
}

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrollTop50: false,
            scrollTop250: false
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
        let scrollTop = event.target.body.scrollTop || event.target.documentElement.scrollTop

        scrollTop > 50 ? this.setState({scrollTop50: true}) : this.setState({scrollTop50: false})
        scrollTop > 250 ? this.setState({scrollTop250: true}) : this.setState({scrollTop250: false})


    }

    render() {

        const classBackgroundColor = this.state.scrollTop50 ? "fill-bg-color" : ''
        const classMenuLinkColor = this.state.scrollTop50 ? "menu-list-item link-color-change" : "menu-list-item"
        const logoMentimeterBlue = this.state.scrollTop50 ? true : false
        const classLoginBtn = this.state.scrollTop50 ? "login-btn link-color-change" : "login-btn"
        const classGetStartBtn = this.state.scrollTop50 ? "get-start-btn link-color-change" : "get-start-btn"
        const classMoveDevice = this.state.scrollTop250 ? "device-2 move" : "device-2"

        return (
            <div onScroll={this.handleScroll}>
                <Header classBackgroundColor={classBackgroundColor}
                        classMenuLinkColor={classMenuLinkColor}
                        logoMentimeterBlue={logoMentimeterBlue}
                        classLoginBtn={classLoginBtn}
                        classGetStartBtn={classGetStartBtn}/>
                <Banner backgroundUrl="style/images/header-background.jpg"
                        mainHeader={content.mainHeader}
                        secondHeader={content.secondHeader}
                        mainText={content.mainText}
                        overlayColor="rgba(34, 72, 85, 0.7)"/>
                <BannerImage classMoveDevice={classMoveDevice}/>
            </div>
        );
    }
}
