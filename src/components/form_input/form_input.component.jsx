import React from 'react';
import './form_input.style.scss';

const FormInput = ({type,placeholder})=>{
    return (
            <input type={type} placeholder={placeholder}/>
    );
}

export default FormInput;