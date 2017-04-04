import React, { Component } from 'react'
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
            scrollTop100: false
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

        if(scrollTop > 100) {
            console.log('MORE THAN 100')
            this.setState({ scrollTop100: true })
        } else {
            this.setState({ scrollTop100: false })
        }
    }
  render() {

      const classBackgroundColor = this.state.scrollTop100 ? "fill-bg-color" : ''
      const classMenuLinkColor = this.state.scrollTop100 ? "menu-list-item link-color-change" : "menu-list-item"
      const logoMentimeterBlue = this.state.scrollTop100 ? true : false
      const classLoginBtn = this.state.scrollTop100 ? "login-btn link-color-change" : "login-btn"
      const classGetStartBtn = this.state.scrollTop100 ? "get-start-btn link-color-change" : "get-start-btn"

    return (
      <div onScroll={this.handleScroll}>
        <Header classBackgroundColor={classBackgroundColor}
                classMenuLinkColor={classMenuLinkColor}
                logoMentimeterBlue={logoMentimeterBlue}
                classLoginBtn={classLoginBtn}
                classGetStartBtn={classGetStartBtn} />
        <Banner backgroundUrl="/style/images/header-background-filtered.jpg"
                mainHeader={content.mainHeader}
                secondHeader={content.secondHeader}
                mainText={content.mainText}/>
        <BannerImage />
      </div>
    );
  }
}
