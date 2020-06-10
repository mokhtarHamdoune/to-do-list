import React from 'react';
import './button.style.scss';

const Button =({children,role,type='button',handleClick})=>{
    return(
        <button type={type} className={`btn ${role}` }  onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;