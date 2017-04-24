import React from 'react'


const GetStart = ({isScrollNav}) => {

    const classLoginBtn = isScrollNav ? "login-btn link-color-change" : "login-btn"
    const classGetStartBtn = isScrollNav ? "get-start-btn link-color-change" : "get-start-btn"

    return (
        <div className="get-start-link-wrapper">
            <a className={classGetStartBtn} href="#">Get started</a>
            <a className={classLoginBtn} href="#">Log in</a>
        </div>
    );

}

export default GetStart