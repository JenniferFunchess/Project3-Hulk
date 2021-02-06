import React from "react";
import "./form.css";

const Form = ({ children }) => {
    return (
        <div className= "blue-form">
            {children}
        </div>
    );
};

export default Form;
