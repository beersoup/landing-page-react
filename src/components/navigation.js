import React from 'react'


const Navigation = ({isScrollNav}) => {

    const classMenuLinkColor = isScrollNav ? "menu-list-item link-color-change" : "menu-list-item"

    return (
        <ul className="menu-list">
            <li><a href="#" className={classMenuLinkColor + ' active'}>Why</a></li>
            <li><a href="#" className={classMenuLinkColor}>Inspiration</a></li>
            <li><a href="#" className={classMenuLinkColor}>Feature</a></li>
            <li><a href="#" className={classMenuLinkColor}>How-to</a></li>
            <li><a href="#" className={classMenuLinkColor}>Campaigns</a></li>
        </ul>
    );

}

export default Navigation