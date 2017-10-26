import React, { Component } from 'react';
const Information = ({paragraph1, paragraph2}) => {
    return <div>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
    </div>
}

Information.defaultProps = {
    paragraph1: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    paragraph2: "More lorem ipsum and some more text to just fill up the stuff and do blah blah blah"
}

export default Information;

