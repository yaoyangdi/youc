import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';



const Button = ({name, type, href,  onClick, buttonStyle,buttonSize}) => {

    return (
        <Link to={href}>
            <button
                className={`btn ${buttonStyle} ${buttonSize}`}
                onClick={onClick}
                type={type}
            >
                {name}
            </button>
        </Link>
    )
}


export default Button;