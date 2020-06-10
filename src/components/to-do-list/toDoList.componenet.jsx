import React ,{Component} from 'react';
import Row from '../row/row.component';
import './toDoList.style.scss';

class ToDoList extends Component{
    render(){
        const rows = this.props.list;
        return(
            <div>
                <div className='table'>
                    <div className='theader'>
                        To Do List
                    </div>
                    <div className='tbody'>
                        {
                            rows.map((row,index)=><Row key={index} row={row} removeFromList={this.props.removeFromList}/>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList;