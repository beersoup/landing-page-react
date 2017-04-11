import React, {Component} from 'react'
import Header from './header'
import Banner from './banner'
import PageTwo from './page-two'

const content = {
    mainHeader: "WHY?",
    secondHeader: "Create fun and interactive Web Site",
    mainText: " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing."
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
                        overlayColor="rgba(0,0,0, 0.7)"
                        scrollTop250={this.state.scrollTop250} />
                <PageTwo />
            </div>
        );
    }
}
