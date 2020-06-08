import React from 'react';
import './button.style.scss';

const Button =({children,role,type='button'})=>{
    return(
        <button type={type} className={`btn ${role}` }>
            {children}
        </button>
    );
}

export default Button;