import React ,{Component} from 'react';
import Form from '../form/form.component';
import Row from '../row/row.component';
import './toDoList.style.scss';

class ToDoList extends Component{

    render(){

        return(
            <div>
                <div className='theader'>
                    <Form />
                </div>
                <div className='tbody'>
                    <Row/>
                    <Row/>
                </div>
            </div>
        );
        
    }
}

export default ToDoList;