import React from "react";
import "./form.css";

const Form = ({ children }) => {
    return (
        <div className= "white-form">
            {children}
        </div>
    );
};

export default Form;
