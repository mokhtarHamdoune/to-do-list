import React,{Component} from 'react';
import Button from '../buttons/button.component';
import './row.style.scss';

class Row extends Component{
    constructor(props){
        super(props);
        this.state={
            newContent:''
        }
    }
    handleClick=(index,role)=>{
        role === 'delete' ? this.props.removeFromList(index) : console.log("modify")
    }
    render(){
        const {row}  = this.props;
        return(
            <div className='row'>
                <div className='toDoContent'>
                    {row.content}
                </div>
                <div className="buttons">
                    <Button role='modify' handleClick={()=>this.handleClick(row.id,'modify')}>Modify</Button>
                    <Button role='delete' handleClick={()=>this.handleClick(row.id,'delete')}>Delete</Button>
                </div>
            </div>
        );
    }
}

export default Row;