import React from 'react'
import BannerImage from './banner-image'


const content = {
    mainHeader: "WHY?",
    secondHeader: "Create fun and interactive Web Site",
    mainText: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.",
    bannerImageBg: "style/images/header-background.jpg"
}

const Banner = () => {

    const backgroundURL = `url("${content.bannerImageBg}")`
    const overlayColor = "rgba(0,0,0, 0.6)"

    return (
        <div className="banner" style={{backgroundImage: backgroundURL}}>
            <div className="banner-overlay" style={{backgroundColor: overlayColor}}>
                <div className="container">
                    <div className="banner-text-wrapper">
                        <span>{content.mainHeader}</span><br />
                        <h1>{content.secondHeader}</h1><br />
                        <p>{content.mainText}</p>
                        <BannerImage />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Banner