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
                            
                            rows.length ?
                            rows.map((row)=><Row key={row.id} row={row} removeFromList={this.props.removeFromList} handleModify={this.props.handleModify}/>) :
                            <div className="emptyList">
                                La List est vide
                            </div>
                            
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList;