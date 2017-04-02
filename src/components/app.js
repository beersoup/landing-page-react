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
  render() {
    return (
      <div>
        <Header />
        <Banner backgroundUrl="/style/images/header-background-filtered.jpg"
                mainHeader={content.mainHeader}
                secondHeader={content.secondHeader}
                mainText={content.mainText}/>
        <BannerImage />
      </div>
    );
  }
}
