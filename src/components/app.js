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
            classBackgroundColor: false
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
        let scrollTop = event.target.body.scrollTop || event.target.documentElement.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);
        console.log('Scroll height', scrollTop)

        if(scrollTop > 100) {
            console.log('MORE THAN 100')
            this.setState({ classBackgroundColor: true })
        } else {
            this.setState({ classBackgroundColor: false })
        }
    }
  render() {
      const classBackgroundColor = this.state.classBackgroundColor ? "fill-bg-color" : ''
    return (
      <div onScroll={this.handleScroll}>
        <Header classBackgroundColor={classBackgroundColor} />
        <Banner backgroundUrl="/style/images/header-background-filtered.jpg"
                mainHeader={content.mainHeader}
                secondHeader={content.secondHeader}
                mainText={content.mainText}/>
        <BannerImage />
      </div>
    );
  }
}
