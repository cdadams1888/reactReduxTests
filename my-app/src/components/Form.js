import React, { Component } from 'react';
const Form = ({first, last, email}) => {
    return <form className="center-form">
                <p>{first}</p>
                <input type="text" />
                <p>{last}</p>
                <input type="text"/>
                <p>{email}</p>
                <input type="text"/>
                <br />
                <br />
                <button></button>
    </form>
}

Form.defaultProps = {
    first: "Enter your first name:",
    last: "Enter your last name:",
    email: "Enter your email address:"
}

export default Form;

