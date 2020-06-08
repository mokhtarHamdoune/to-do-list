import React,{Component} from 'react';
import Button from '../buttons/button.component';
import './row.style.scss';

class Row extends Component{
    render(){
        return(
            <div className='row'>
                <div className='toDoContent'>
                    What should I do What should I do What should I do What should I do What should I do What should I do What should I do
                </div>
                <div className="buttons">
                    <Button role='modify'>Modify</Button>
                    <Button role='delete'>Delete</Button>
                </div>
            </div>
        );
    }
}

export default Row;