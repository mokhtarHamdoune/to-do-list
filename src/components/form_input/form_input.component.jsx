import React from 'react';
import './form_input.style.scss';
//mettre le rest des parametre dans un array s'appel rest
const FormInput = ({handleChange,...rest})=>{
    //detruire le array en elemments
    return (
            <input {...rest} onChange={handleChange}/>
    );
}

export default FormInput;