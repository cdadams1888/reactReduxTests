import React, { Component } from 'react';
const Header = ({title, subheader}) => {
    return <div>
        <h1>{title}</h1>
        <h6>{subheader}</h6>
    </div>
}

Header.defaultProps = {
    title: "BookYapper",
    subheader: "A community for book readers."
}

export default Header;

