import React from 'react'


const Brand = ({isScrollNav}) => {

        return (
            <a href="/" className="navbar-brand">
                {isScrollNav ?
                    <img className="brand-image" alt="Brand" src="style/images/logo_blue.svg"/>
                    :
                    <img className="brand-image" alt="Brand" src="style/images/logo_white.svg"/>}
            </a>
        );

}

export default Brand