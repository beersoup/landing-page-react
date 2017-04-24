import React from 'react'
import Brand from './brand'
import Navigation from './navigation'
import GetStart from './get-start'


const Header = ({isScrollNav}) => {

    const classBackgroundColor = isScrollNav ? "fill-bg-color" : ''

    return (
        <div className={'header navbar-fixed-top navbar-transparent ' + classBackgroundColor}>
            <div className="header-wrapper">
                <Brand isScrollNav={isScrollNav}/>
                <Navigation isScrollNav={isScrollNav}/>
                <GetStart isScrollNav={isScrollNav}/>
            </div>
        </div>
    );

}

export default Header