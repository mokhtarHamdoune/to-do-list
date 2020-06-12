import React from 'react';
import FormInput from '../form_input/form_input.component';
import Button from '../buttons/button.component'
import './form.style.scss';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={
            content:''
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){
        const {name,value} =event.target;
        this.setState({[name]:value});
    }

    handleClick=()=>{
        this.props.handleSubmit(this.state);
        this.setState({content:''});
    }

    render(){
        const{content}=this.state;
        return(
            <form>
                <div className='add-to-list'>
                    <FormInput type='text' name='content' value={content} placeholder='Ajouter dans la list' handleChange={this.handleChange} />
                    <Button role='add' handleClick={this.handleClick} >Save</Button>
                </div>
            </form>
        );
    }
}

export default Form;