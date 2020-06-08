import React from 'react';
import FormInput from '../form_input/form_input.component';
import Button from '../buttons/button.component'
import './form.style.scss';

class Form extends React.Component{

    render(){

        return(
            <form>
                <FormInput type='search' placeholder='Chercher dans la list' />
                <div className='add-to-list'>
                    <FormInput type='text' placeholder='Ajouter dans la list' />
                    <Button role='add' type='submit'>Save</Button>
                </div>
            </form>
        );
    }
}

export default Form;